const request = require("supertest")
const app = require('../app')
const {User,Coach,Level} = require('../models/index')

beforeAll(async () =>{
    await Coach.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
    })
    await User.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
    })
    await Level.destroy({
        where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true,
    })

     Level.bulkCreate([
        {
            name: "Easy",
            thumbnail:
          "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
          description:"Easy",  
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
          description:"Hard", 
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
    await Coach.bulkCreate([
                {
                    name: "Tondiki",
                    imgCoach:
                        "https://ik.imagekit.io/ebq3r9zrvle/H8/WhatsApp_Image_2022-01-15_at_00.02.10.jpeg_NlyT9AIyg8I.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642860034024",
                    age: "20",
                    bio: "This is tondiki This is tondiki This is tondiki This is tondiki This is tondiki This is tondiki This is tondiki This is tondiki",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                
                }
             ])
})

beforeEach(() => {
    jest.restoreAllMocks()
  })


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
        //  expect(resp.body).toHaveProperty("access_token")
        
         done()
     })
     .catch((err) =>{
         console.log(err)
     })
})

test("[GET/api/users/coach success] - should be return object with status code 200", (done) =>{
    request(app)
     .get("/api/users/coach")
     .then((resp) =>{
       
        
         expect(resp.status).toBe(200)
         expect(resp.body).toEqual(expect.any(Object))
         expect(resp.body[0]).toHaveProperty("name")
         expect(resp.body[0]).toHaveProperty("imgCoach")
         expect(resp.body[0]).toHaveProperty("age")
         expect(resp.body[0]).toHaveProperty("bio")
         
         
         done()
     })
     .catch((err) =>{
         console.log(err.data, '<<<<<<<<<<<<<<<<< error')
     })
  })
  
  test("[GET/api/users/coach ERROR]  - should be return object with status code 500", (done) =>{
    jest.spyOn(Coach, 'findAll').mockRejectedValue('Error')
    request(app)
    .get("/api/users/coach")
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


  test("[GET/api/users/coach/:id success] - should be return object with status code 200", (done) =>{
    request(app)
     .get("/api/users/coach/1")
     .then((resp) =>{
        console.log(resp.body, '>>>>>>>>>>>>>>>>>>>>>> ini kan')
        
         expect(resp.status).toBe(200)
         expect(resp.body).toEqual(expect.any(Object))
         expect(resp.body).toHaveProperty("name")
         expect(resp.body).toHaveProperty("imgCoach")
         expect(resp.body).toHaveProperty("age")
         expect(resp.body).toHaveProperty("bio")
         
         
         done()
     })
     .catch((err) =>{
         console.log(err.data, '<<<<<<<<<<<<<<<<< error')
     })
  })
  
  test("[GET/api/users/coach/:id ERROR]  - should be return object with status code 500", (done) =>{
    jest.spyOn(Coach, 'findOne').mockRejectedValue('Error')
    request(app)
    .get("/api/users/coach/1")
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

  test("[GET/api/users/level success] - should be return object with status code 200", (done) =>{
    request(app)
     .get("/api/users/level")
     .then((resp) =>{
       
         expect(resp.status).toBe(200)
         expect(resp.body).toEqual(expect.any(Object))
         expect(resp.body[0]).toHaveProperty("name")
        //  expect(resp.body[0]).toHaveProperty("imgCoach")
        //  expect(resp.body[0]).toHaveProperty("age")
        //  expect(resp.body[0]).toHaveProperty("bio")
         
         
         done()
     })
     .catch((err) =>{
         console.log(err.data, '<<<<<<<<<<<<<<<<< error')
     })
  })
  
  test("[GET/api/users/level ERROR]  - should be return object with status code 500", (done) =>{
    jest.spyOn(Level, 'findAll').mockRejectedValue('Error')
    request(app)
    .get("/api/users/level")
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