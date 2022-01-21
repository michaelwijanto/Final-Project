const request = require("supertest");
const app = require("../app");
const { UserProfile, User } = require("../models");
const { sign } = require("../helpers/jwt");
const jwt = require("jsonwebtoken");

let access_token = null;
const user = {
  email: "testemail@email.com",
  password: "password",
  fullName: "tester",
  role: "user",
  isRegister: "true",
  createdAt: new Date(),
  updatedAt: new Date(),
};

beforeAll(async () => {
  await User.destroy({
    where: {},
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });

  await UserProfile.destroy({
    where: {},
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });

  const newUser = await User.create(user);

  const payload = {
    id: newUser.id,
    email: newUser.email,
    fullName: newUser.fullName,
    role: newUser.role,
    isRegister: newUser.isRegister,
  };

  access_token = sign(payload);

  UserProfile.create({
    UserId: 1,
    phoneNumber: "08123123123",
    subscription: "false",
    gender: "male",
    dateBirth: "30-12-2000",
    LevelId: 1,
    goals: "weightlose",
  });
});

describe("GET /api/user-profile", () => {
  test("[showUserProfile - success]", (done) => {
    request(app)
      .get("/api/user-profile")
      .set("access_token", access_token)
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(200);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("UserProfile")
        expect(result).toHaveProperty("Log")
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[postUserProfile - success]", (done) => {
    request(app)
      .post("/api/user-profile")
      .set("access_token", access_token)
      .send({
        UserId: 1,
        MovieId: 1,
      })
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(201);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test("[postUserProfile - fail]", (done) => {
    request(app)
      .post("/api/user-profile")
      .set("access_token", access_token)
      .send({
        height = "170",
        weight = "80",
        activityLevel = "4",
        phoneNumber = "081123123123",
        subscription = "false",
        gender = "male",
        dateBirth = "30-12-2000",
        goals = "weightlose",
      })
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(500);
        expect(result).toEqual(expect.any(Object))
        expect(result).toHaveProperty('message', 'Internal server error');
        done()
      })
      .catch((err) => {
        done(err);
      });
  });
});
