const request = require("supertest");
const app = require("../app");
const { UserProfile, User, Level, Log } = require("../models");

beforeAll(async () => {
  await User.destroy({
    where: {},
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await UserProfile.destroy({
    where: {},
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await Level.destroy({
    where: {},
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await Log.destroy({
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
      description: "Medium",
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
      description: "Medium",
      createdAt: new Date(),
      updateedAt: new Date(),
    },
  ]);

  User.create({
    email: "ariesastra@mail.com",
    password: "password",
    fullName: "Arie Sastra",
    role: "admin",
    isRegister: "false",
    pin: "123456",
    isActivated: "true",
  });
});

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("GET /api/user-profiles", () => {
  test("[POST/api/users/login success] - should be return object with status code 200", (done) => {
    request(app)
      .post("/api/users/login")
      .send({
        email: "ariesastra@mail.com",
        password: "password",
      })
      .then((resp) => {
        access_token = resp.body.access_token;
        expect(resp.status).toBe(200);
        expect(resp.body).toEqual(expect.any(Object));
        expect(resp.body).toHaveProperty("access_token");
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Post User Profile
  test("[postUserProfile - success]", (done) => {
    request(app)
      .post("/api/user-profiles")
      .set("access_token", access_token)
      .send({
        height: "150",
        weight: "40",
        activityLevel: "4",
        phoneNumber: "081123123123",
        subscription: "false",
        gender: "male",
        dateBirth: "30-12-2000",
        goals: "weightlose",
      })
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(201);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message");
        done();
      })
      .catch((err) => {
        console.log(er);
      });
  });

  test("[postUserProfile - success]", (done) => {
    request(app)
      .post("/api/user-profiles")
      .set("access_token", access_token)
      .send({
        height: "150",
        weight: "50",
        activityLevel: "4",
        phoneNumber: "081123123123",
        subscription: "false",
        gender: "male",
        dateBirth: "30-12-2000",
        goals: "weightlose",
      })
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(201);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message");
        done();
      })
      .catch((err) => {
        console.log(er);
      });
  });

  test("[postUserProfile - success]", (done) => {
    request(app)
      .post("/api/user-profiles")
      .set("access_token", access_token)
      .send({
        height: "150",
        weight: "80",
        activityLevel: "4",
        phoneNumber: "081123123123",
        subscription: "false",
        gender: "male",
        dateBirth: "30-12-2000",
        goals: "weightlose",
      })
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(201);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message");
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Get User Profile
  test("[showUserProfile - success]", (done) => {
    request(app)
      .get("/api/user-profiles")
      .set("access_token", access_token)
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(200);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("UserProfile");
        expect(result).toHaveProperty("Log");
        done();
      })
      .catch((err) => {
        console.log(err, "<<<<<<<<<<<<<<<<< error");
      });
  });

  test("[showUserProfile - invalidToken]", (done) => {
    request(app)
      .get("/api/user-profiles")
      .then((resp) => {
        expect(resp.status).toBe(401);
        expect(resp.body).toEqual(expect.any(Object));
        expect(resp.body).toHaveProperty("error");
        // expect(resp.body.message).toBe('Invalid token')
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Post User Profile
  test("[postUserProfile - success]", (done) => {
    request(app)
      .post("/api/user-profiles")
      .set("access_token", access_token)
      .send({
        height: "170",
        weight: "80",
        activityLevel: "4",
        phoneNumber: "081123123123",
        subscription: "false",
        gender: "male",
        dateBirth: "30-12-2000",
        goals: "weightlose",
      })
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(201);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message");
        done();
      })
      .catch((err) => {
        console.log(er);
      });
  });

  test("[postUserProfile - noAccessToken]", (done) => {
    request(app)
      .post("/api/user-profiles")
      .send({
        height: "170",
        weight: "80",
        activityLevel: "4",
        phoneNumber: "081123123123",
        subscription: "false",
        gender: "male",
        dateBirth: "30-12-2000",
        goals: "weightlose",
      })
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

  test("[postUserProfile - emptyInput]", (done) => {
    request(app)
      .post("/api/user-profiles")
      .set("access_token", access_token)
      .send({
        height: "",
        weight: "",
        activityLevel: "",
        phoneNumber: "",
        subscription: "",
        gender: "",
        dateBirth: "",
        goals: "",
      })
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", "Please fill all the blank!");
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  test("[postUserProfile - notHit]", (done) => {
    request(app)
      .post("/api/user-profiles")
      .set("access_token", access_token)
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", "Please fill all the blank!");
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// // // PATCH CONTENT
test("[PATCH/api/user-profiles/updateSubs success] - should be return object with status code 200", (done) => {
  request(app)
    .patch("/api/user-profiles/updateSubs")
    .set("access_token", access_token)
    .then((resp) => {
      expect(resp.status).toBe(200);
      expect(resp.body).toEqual(expect.any(Object));
      expect(resp.body).toHaveProperty("message");
      expect(resp.body.message).toBe("Thank you for your subsciption");
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});

test("[PATCH/api/user-profiles/updateSubs ERROR] - should be return object with status code 401", (done) => {
  request(app)
    .patch("/api/user-profiles/updateSubs")
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

test("[GET/api/user-profiles ERROR]  - should be return object with status code 500", (done) => {
  jest.spyOn(UserProfile, "findOne").mockRejectedValue("Error");
  request(app)
    .get("/api/user-profiles")
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

test("[GET/api/user-profiles ERROR]  - should be return object with status code 500", (done) => {
  jest.spyOn(Log, "findAll").mockRejectedValue("Error");
  request(app)
    .get("/api/user-profiles")
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
