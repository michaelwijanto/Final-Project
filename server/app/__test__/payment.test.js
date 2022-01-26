const request = require("supertest");
const app = require("../app");
const midtransClient = require("midtrans-client");
const {
  UserContent,
  Content,
  User,
  UserProfile,
  Log,
  Level,
} = require("../models");

let access_token = "";

beforeAll(async () => {
  User.destroy({
    where: {},
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });

  Content.destroy({
    where: {},
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });

  UserContent.destroy({
    where: {},
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });
  UserProfile.destroy({
    where: {},
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });
  Level.destroy({
    where: {},
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  Level.bulkCreate([
    {
      name: "Easy",
      thumbnail:
        "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
      description: "easy",
      createdAt: new Date(),
      updateedAt: new Date(),
    },
    {
      name: "Medium",
      thumbnail:
        "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
      description: "Medium",
      createdAt: new Date(),
      updateedAt: new Date(),
    },
    {
      name: "Hard",
      thumbnail:
        "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
      description: "Hard",
      createdAt: new Date(),
      updateedAt: new Date(),
    },
  ]);
  User.create({
    email: "ariesastra@mail.com",
    password: "password",
    fullName: "Arie Sastra",
    role: "admin",
    isRegister: "true",
    pin: "123456",
    isActivated: "true",
  });
  UserProfile.bulkCreate([
    {
      UserId: 1,
      phoneNumber: "098753688965",
      subscription: "false",
      gender: "Male",
      dateBirth: new Date(),
      goals: "sixpack",
      LevelId: 1,
      bmi: "18",
      health: "Normal",
      healthy_bmi_range: "18.25-19.00",
      createdAt: new Date(),
      updateedAt: new Date(),
    },
  ]);
});

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("SET TOKEN", (_) => {
  test("/login - GET TOKEN", (done) => {
    request(app)
      .post("/api/users/login")
      .send({
        email: "ariesastra@mail.com",
        password: "password",
      })
      .then((res) => {
        const result = res.body;
        access_token = result.access_token;
        expect.status = 200;
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("access_token");
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});

test("[GET/api/payment/transaction-token success] - should be return object with status code 200", (done) => {
  request(app)
    .get("/api/payment/transaction-token")
    .set("access_token", access_token)
    .then((resp) => {
      expect(resp.status).toBe(200);
      expect(resp.body).toEqual(expect.any(Object));
      expect(resp.body).toHaveProperty("token");
      done();
    })
    .catch((err) => {
      console.log(err.data, "<<<<<<<<<<<<<<<<< error");
    });
});

test("GET/api/payment/transaction-token  ERROR]  - should be return object with status code 401", (done) => {
  request(app)
    .get("/api/payment/transaction-token ")
    .then((resp) => {
      expect(resp.status).toBe(401);
      expect(resp.body).toEqual(expect.any(Object));
      expect(resp.body).toHaveProperty("error");
      expect(resp.body.error).toBe("Invalid token");
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});

test("[GET/api/payment/transaction-token ERROR]  - should be return object with status code 500", (done) => {
  jest.spyOn(UserProfile, "findOne").mockRejectedValue("Error");
  request(app)
    .get("/api/payment/transaction-token")
    .set("access_token", access_token)
    .then((resp) => {
      expect(resp.status).toBe(500);
      expect(resp.body).toEqual(expect.any(Object));
      expect(resp.body).toHaveProperty("error");
      expect(resp.body.error).toBe("Internal server error");
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});

test("[PUT/api/payment/success success] - should be return object with status code 200", (done) => {
  request(app)
    .put("/api/payment/success")
    .set("access_token", access_token)
    .then((resp) => {
      expect(resp.body).toEqual(expect.any(Object));
      expect(resp.body[1][0]).toHaveProperty("subscription");
      expect(resp.body[1][0]).toHaveProperty("goals");
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});

test("[PUT/api/payment/success success] - should be return object with status code 200", (done) => {
  request(app)
    .put("/api/payment/success")
    .then((resp) => {
      console.log(resp.body);
      expect(resp.status).toBe(401);
      expect(resp.body).toEqual(expect.any(Object));
      expect(resp.body).toHaveProperty("error");
      expect(resp.body.error).toBe("Invalid token");
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});
