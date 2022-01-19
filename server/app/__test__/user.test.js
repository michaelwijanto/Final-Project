const request = require("supertest");
const app = require("../app");
const { User } = require("../models");

beforeAll(async () => {
  await User.destroy({
    where: {},
    truncate: true,
    restartIdentity: true,
  });
  await User.create({
    email: "testemail@email.com",
    password: "password",
    fullName: "tester",
    role: "user",
    isRegister: "true",
  });
});

afterAll(async () => {
  await User.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });
});

describe("POST /users/register", () => {
  test("should successfully register with status code 201");
});
