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
  test("should fail if no email", (done) => {
    request(app)
      .post("/api/users/register")
      .send({
        password: "password",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message", "Email Required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail if email empty", (done) => {
    request(app)
      .post("/api/users/register")
      .send({
        email: "",
        password: "password",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message", "Email cannot be empty");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail if no password", (done) => {
    request(app)
      .post("/api/users/register")
      .send({
        email: "new@email.com",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message", "Password Required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail if password is empty", (done) => {
    request(app)
      .post("/api/users/register")
      .send({
        email: "new@email.com",
        password: "",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message", "Password cannot be empty");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail if full name is empty", (done) => {
    request(app)
      .post("/api/users/register")
      .send({
        email: "new@email.com",
        password: "password",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message", "Full Name Required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  // test("should fail if email is not unique", (done) => {
  //   request(app)
  //     .post("/api/users/register")
  //     .send({
  //       email: "testemail@email.com",
  //       password: "password",
  //     })
  //     .then((response) => {
  //       const result = response.body;
  //       expect(response.status).toBe(400);
  //       expect(result).toEqual(expect.any(Object));
  //       expect(result).toHaveProperty("message", "Email must be unique");
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
  test("should fail if not email", (done) => {
    request(app)
      .post("/api/users/register")
      .send({
        email: "testemail",
        password: "password",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("message", "Invalid email format");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
