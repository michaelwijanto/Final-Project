const request = require("supertest");
const app = require("../app");
const { User } = require("../models");

// beforeAll(async () => {
//   User.destroy({
//     where: {},
//     truncate: true,
//     restartIdentity: true,
//   });
// User.create({
//   email: "testemail@email.com",
//   password: "password",
//   fullName: "tester",
//   address: "temp address",
//   role: "user",
//   isRegister: "true",
// });
// });

// afterAll(async () => {
//   User.destroy({
//     truncate: true,
//     restartIdentity: true,
//     cascade: true,
//   });
// });

describe("POST /api/users/register", () => {
  const userTest = {
    email: "new@email.com",
    password: "password",
    fullName: "test name",
    address: "alamat rumah",
  };
  test("should successfully register with status code 201", (done) => {
    request(app)
      .post("/api/users/register")
      .send(userTest)
      .then((response) => {
        // console.log(response);
        const result = response.body;
        expect(response.status).toBe(201);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("id", expect.any(Number));
        expect(result).toHaveProperty("email", userTest.email);
        expect(result).toHaveProperty("fullName", userTest.fullName);
        expect(result).toHaveProperty("role", "user");
        expect(result).toHaveProperty("isRegister", "false");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
