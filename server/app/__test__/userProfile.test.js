const request = require("supertest");
const app = require("../app");
const { 
  UserProfile,
  User,
  Level,
  Log 
} = require("../models");

beforeAll(async () =>{
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
  })
  await Log.destroy({
    where: {},
    truncate: true,
    cascade: true,
    restartIdentity: true,
  })

  Level.bulkCreate([
    {
      name: "Easy",
      createdAt: new Date(),
      updateedAt: new Date()
      
    },
    {
      name: "Medium",
      createdAt: new Date(),
      updateedAt: new Date()
    },
    {
        name: "Hard",
        createdAt: new Date(),
        updateedAt: new Date()
    }
  ]) 

  User.create({
    email: "ariesastra@mail.com",
    password: "password",
    fullName: "Arie Sastra",
    role: "admin",
    isRegister: "false",
  })
})

describe("GET /api/user-profiles", () => {
  test("[POST/api/users/login success] - should be return object with status code 200", (done) =>{
  request(app)
    .post("/api/users/login")
    .send({
    email: "ariesastra@mail.com",
    password: "password",
    })
    .then((resp) =>{
        
        access_token = resp.body.access_token 
          
        expect(resp.status).toBe(200)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("access_token")
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
  })

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
        console.log(er)
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
        expect(result).toHaveProperty("UserProfile")
        expect(result).toHaveProperty("Log")
        done();
      })
      .catch((err) => {
        console.log(err, '<<<<<<<<<<<<<<<<< error')
      });
  });

  test("[showUserProfile - invalidToken]", (done) => {
    request(app)
      .get("/api/user-profiles")
      .then((resp) => {
        expect(resp.status).toBe(401)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("message")
        // expect(resp.body.message).toBe('Invalid token')
        done()
      })
      .catch((err) => {
        console.log(err)
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
        console.log(er)
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
        expect(resp.status).toBe(401)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("message")
        expect(resp.body.message).toBe('Invalid token')
        done()
      })
      .catch((err) => {
        console.log(err)
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
        expect(result).toEqual(expect.any(Object))
        expect(result).toHaveProperty('message', 'Please fill all the blank!');
        done()
      })
      .catch((err) => {
        console.log(err)
      });
  });

  test("[postUserProfile - notHit]", (done) => {
    request(app)
      .post("/api/user-profiles")
      .set("access_token", access_token)
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(400);
        expect(result).toEqual(expect.any(Object))
        expect(result).toHaveProperty('message', 'Please fill all the blank!');
        done()
      })
      .catch((err) => {
        console.log(err)
      });
  });
});
