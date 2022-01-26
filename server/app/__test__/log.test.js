const request = require("supertest");
const app = require("../app");
const {Level,Log,User, UserProfile} = require("../models");


beforeAll(async () =>{
     Log.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
    })
     User.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
    })
    Level.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
    })
     UserProfile.destroy({
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
          description:"Medium",  
          createdAt: new Date(),
            updateedAt: new Date()
            
        },
        {
            name: "Medium",
            thumbnail:
          "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
          description:"Medium",  
          createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            name: "Hard",
            thumbnail:
          "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
          description:"Medium", 
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
        pin: "123456",
        isActivated: "true",
    })
   
})

beforeEach(() => {
    jest.restoreAllMocks()
  })


// login buat access_token
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


test("[POST/api/log-history  success] - should be return object with status code 201", (done) =>{
    request(app)
    .post("/api/log-history ")
    .set("access_token",access_token)
    .send({
        height: "180",
        weight: "80",
     })
    .then((resp) =>{
        expect(resp.status).toBe(201)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("height")
        expect(resp.body).toHaveProperty("weight")
       
 
        done()
    })
    .catch((err) =>{
        console.log(err)
     })
})

test("[POST/api/log-history ERROR]  - should be return object with status code 401", (done) =>{
    request(app)
    .post("/api/log-history ")
    .send({
        height: "180",
        weight: "80",
     })
    .then((resp) =>{ 
        
        expect(resp.status).toBe(401)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
        expect(resp.body.error).toBe('Invalid token')
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
}) 

test("[POST/api/log-history ERROR]  - should be return object with status code 401", (done) =>{
    request(app)
    .post("/api/log-history ")
    .set("access_token",access_token)
    .then((resp) =>{ 
        
        expect(resp.status).toBe(500)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
        
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
})



test("[GET/api/log-history success] - should be return object with status code 200", (done) =>{
    request(app)
     .get("/api/log-history")
     .set("access_token",access_token)
     .then((resp) =>{
        
        
         expect(resp.status).toBe(200)
         expect(resp.body).toEqual(expect.any(Object))
         expect(resp.body[0]).toHaveProperty("height")

         done()
     })
     .catch((err) =>{
         console.log(err.data, '<<<<<<<<<<<<<<<<< error')
     })
  })
  
  test("[GET/api/log-history ERROR]  - should be return object with status code 401", (done) =>{
    request(app)
    .get("/api/log-history")
    .then((resp) =>{
        
        expect(resp.status).toBe(401)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
        expect(resp.body.error).toBe('Invalid token')
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
}) 


  test("[GET/api/log-history ERROR]  - should be return object with status code 500", (done) =>{
    jest.spyOn(Log, 'findAll').mockRejectedValue('Error')
    request(app)
    .get("/api/log-history")
    .set("access_token",access_token)
    .then((resp) =>{
        expect(resp.status).toBe(500)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
        expect(resp.body.error).toBe('Internal server error')
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
}) 