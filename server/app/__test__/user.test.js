const request = require("supertest");
const app = require("../app");
const { User } = require("../models");
const { sign } = require("../helpers/jwt");

beforeAll(async () => {
  User.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });

  User.create({
    email: "testemail@email.com",
    password: "password",
    fullName: "tester",
    address: "temp address",
    role: "user",
    isRegister: "true",
  }).then((res) => {
    validToken = sign({
      id: res.id,
      email: res.id,
      fullName: res.fullName,
      role: res.role,
      isRegister: res.isRegister,
    });
  });
});

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
        fullName: "test name",
        address: "alamat rumah",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", expect.arrayContaining(["Email Required"]));
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
        fullName: "test name",
        address: "alamat rumah",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", expect.arrayContaining(["Email cannot be empty", "Invalid email format"]));
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail if email is not unique", (done) => {
    request(app)
      .post("/api/users/register")
      .send({
        email: "new@email.com",
        password: "password",
        fullName: "test name",
        address: "alamat rumah",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", expect.arrayContaining(["Email already exist"]));
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail if not email", (done) => {
    request(app)
      .post("/api/users/register")
      .send({
        email: "testemail",
        password: "password",
        fullName: "test name",
        address: "alamat rumah",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", expect.arrayContaining(["Invalid email format"]));
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
        fullName: "test name",
        address: "alamat rumah",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", expect.arrayContaining(["Password Required"]));
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
        fullName: "test name",
        address: "alamat rumah",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", expect.arrayContaining(["Password cannot be empty"]));
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
        email: "new23@email.com",
        password: "password",
        address: "alamat rumah",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", expect.arrayContaining(["Full Name Required"]));
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  // test("should fail if email empty", (done) => {
  //   request(app)
  //     .post("/api/users/register")
  //     .send({
  //       email: "",
  //       password: "password",
  //       fullName: "test name",
  //       address: "alamat rumah",
  //     })
  //     .then((response) => {
  //       const result = response.body;
  //       expect(response.status).toBe(400);
  //       expect(result).toEqual(expect.any(Object));
  //       expect(result).toHaveProperty("message", "Email cannot be empty");
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
  // test("should fail if email is not unique", (done) => {
  //   request(app)
  //     .post("/api/users/register")
  //     .send({
  //       email: "new@email.com",
  //       password: "password",
  //       fullName: "test name",
  //       address: "alamat rumah",
  //     })
  //     .then((response) => {
  //       const result = response.body;
  //       expect(response.status).toBe(400);
  //       expect(result).toEqual(expect.any(Object));
  //       expect(result).toHaveProperty("message", "Email already exist");
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
  // test("should fail if not email", (done) => {
  //   request(app)
  //     .post("/api/users/register")
  //     .send({
  //       email: "testemail",
  //       password: "password",
  //       fullName: "test name",
  //       address: "alamat rumah",
  //     })
  //     .then((response) => {
  //       const result = response.body;
  //       expect(response.status).toBe(400);
  //       expect(result).toEqual(expect.any(Object));
  //       expect(result).toHaveProperty("message", "Invalid email format");
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
  // test("should fail if no password", (done) => {
  //   request(app)
  //     .post("/api/users/register")
  //     .send({
  //       email: "new@email.com",
  //       fullName: "test name",
  //       address: "alamat rumah",
  //     })
  //     .then((response) => {
  //       const result = response.body;
  //       expect(response.status).toBe(400);
  //       expect(result).toEqual(expect.any(Object));
  //       expect(result).toHaveProperty("message", "Password Required");
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
  // test("should fail if password is empty", (done) => {
  //   request(app)
  //     .post("/api/users/register")
  //     .send({
  //       email: "new@email.com",
  //       password: "",
  //       fullName: "test name",
  //       address: "alamat rumah",
  //     })
  //     .then((response) => {
  //       const result = response.body;
  //       expect(response.status).toBe(400);
  //       expect(result).toEqual(expect.any(Object));
  //       expect(result).toHaveProperty("message", "Password cannot be empty");
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
  // test("should fail if full name is empty", (done) => {
  //   request(app)
  //     .post("/api/users/register")
  //     .send({
  //       email: "new23@email.com",
  //       password: "password",
  //       address: "alamat rumah",
  //     })
  //     .then((response) => {
  //       const result = response.body;
  //       expect(response.status).toBe(400);
  //       expect(result).toEqual(expect.any(Object));
  //       expect(result).toHaveProperty("message", "Full Name Required");
  //       done();
  //     })
  //     .catch((err) => {
  //       done(err);
  //     });
  // });
});

describe("POST /api/users/login", () => {
  test("should successfully login with status code 200", (done) => {
    request(app)
      .post("/api/users/login")
      .send({
        email: "testemail@email.com",
        password: "password",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(200);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("access_token", expect.any(String));
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail login due if email is empty", (done) => {
    request(app)
      .post("/api/users/login")
      .send({
        password: "password",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", "Email or Password is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail login due if password is empty", (done) => {
    request(app)
      .post("/api/users/login")
      .send({
        email: "testemail@email.com",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(400);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", "Email or Password is required");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail login if wrong password", (done) => {
    request(app)
      .post("/api/users/login")
      .send({
        email: "testemail@email.com",
        password: "wrongPassword",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(401);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", "Invalid email/password");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  test("should fail login if wrong email", (done) => {
    request(app)
      .post("/api/users/login")
      .send({
        email: "wrongemail@email.com",
        password: "password",
      })
      .then((response) => {
        const result = response.body;
        expect(response.status).toBe(401);
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error", "Invalid email/password");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
