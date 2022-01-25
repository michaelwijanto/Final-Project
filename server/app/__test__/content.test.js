const request = require("supertest")
const app = require('../app')
const {User,Content,Level} = require('../models/index')

beforeAll(async () =>{
    await Content.destroy({
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
            createdAt: new Date(),
            updateedAt: new Date()
            
        },
        {
            name: "Medium",
            thumbnail:
          "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            name: "Hard",
            thumbnail:
          "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
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
    await Content.bulkCreate([
        {
            title: "Program untuk pemula 1",
            description: "T7 Hari Bakar Lemak dengan Senam Aerobik! Cuma 15 Menit dan Cocok untuk Pemula",
            youtubeUrl: "https://www.youtube.com/watch?v=l3Z_O2hUTM8&list=PLFCuzxdXaCc38p2skVkR6d8rl2nEdz6IB&index=1",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 1000,
            statusLike: "not like",
            LevelId: 1,
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            title: "Program untuk pemula 2",
            description: "7 Hari Jadwal latihan otot di rumah.",
            youtubeUrl: "https://www.youtube.com/watch?v=lppA33-4Sdo",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 2000,
            statusLike: "not like",
            LevelId: 1,
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            title: "Program untuk pemula 3",
            description: "7 HARIMEMBENTUK OTOT DIRUMAH TANPA ALAT SATU PUN !!!... LATIHAN CALISTHENICS UNTUK PEMULA DARI NOL",
            youtubeUrl: "https://www.youtube.com/watch?v=JdlPviK2Dws",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 2000,
            statusLike: "not like",
            LevelId: 1,
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            title: "Program untuk Intermediete 1",
            description: "7 Hari Bakar Lemak Seluruh Tubuh dengan Senam Aerobik Selama 15 Menit.",
            youtubeUrl: "https://www.youtube.com/watch?v=q7ThUwbRfdw&list=PLFCuzxdXaCc38p2skVkR6d8rl2nEdz6IB&index=5",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 20000,
            statusLike: "not like",
            LevelId: 2,
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            title: "Program untuk Intermediete 2",
            description: "Olahraga 10 Menit Bakar Lemak Perut dan Paha Tanpa Alat | Olahraga di Rumah",
            youtubeUrl: "https://www.youtube.com/watch?v=XNwcdekqqNA",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 50000,
            statusLike: "not like",
            LevelId: 2,
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            title: "Program untuk Intermediete 3",
            description: "13 LATIHAN TERBAIK DI RUMAH TANPA ALAT GYM",
            youtubeUrl: "https://www.youtube.com/watch?v=dZ0XZBtaASE",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 50000,
            statusLike: "not like",
            LevelId: 2,
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            title: "Program untuk Expert 1",
            description: "7 Hari Menghilangkan Lemak dengan Senam Aerobik! Bakar Kalori Seluruh Tubuh",
            youtubeUrl: "https://www.youtube.com/watch?v=z2E6uO9oIxM&list=PLFCuzxdXaCc38p2skVkR6d8rl2nEdz6IB&index=7",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 100000,
            statusLike: "not like",
            LevelId: 3,
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            title: "Program untuk Expert 2",
            description: "20 Menit Full Body Workout di Rumah",
            youtubeUrl: "https://www.youtube.com/watch?v=WTqrBmCz2R4",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 200000,
            statusLike: "not like",
            LevelId: 3,
            createdAt: new Date(),
            updateedAt: new Date()
        },
        {
            title: "Program untuk Expert 3",
            description: "Program latihan di Gym",
            youtubeUrl: "https://www.youtube.com/watch?v=sNgZRSSHvs4",
            imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
            likes: 240000,
            statusLike: "not like",
            LevelId: 3,
            createdAt: new Date(),
            updateedAt: new Date()
        }
    ])
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
        //  expect(resp.body).toHaveProperty("access_token")
        
         done()
     })
     .catch((err) =>{
         console.log(err)
     })
})

// GET CONTENT
test("[GET/api/contents success] - should be return object with status code 200", (done) =>{
    request(app)
     .get("/api/contents")
     .set("access_token",access_token)
     .then((resp) =>{
        
        
         expect(resp.status).toBe(200)
         expect(resp.body).toEqual(expect.any(Object))
         expect(resp.body[0]).toHaveProperty("title")
         expect(resp.body[0]).toHaveProperty("description")
         expect(resp.body[0]).toHaveProperty("youtubeUrl")
         expect(resp.body[0]).toHaveProperty("likes")
         expect(resp.body[0]).toHaveProperty("statusLike")
         
         done()
     })
     .catch((err) =>{
         console.log(err.data, '<<<<<<<<<<<<<<<<< error')
     })
})

test("[GET/api/contents ERROR]  - should be return object with status code 500", (done) =>{
    jest.spyOn(Content, 'findAll').mockRejectedValue('Error')
    request(app)
    .get("/api/contents")
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

test("[GET/api/contents ERROR]  - should be return object with status code 401", (done) =>{
    request(app)
    .get("/api/contents")
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

// // // GET CONTENTS ID
test("[GET/api/contents/:id success ] - should be return object with status code 200", (done) =>{
    request(app)
     .get("/api/contents/1")
     .set("access_token",access_token)
     .then((resp) =>{
    
        expect(resp.status).toBe(200)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("title")
        expect(resp.body).toHaveProperty("description")
        expect(resp.body).toHaveProperty("youtubeUrl")
        expect(resp.body).toHaveProperty("likes")
        expect(resp.body).toHaveProperty("statusLike")
       

         done()
     })
     .catch((err) =>{
         console.log(err)
     })
})

test("[GET/api/contents/:id ERROR]  - should be return object with status code 500", (done) =>{
    jest.spyOn(Content, 'findByPk').mockRejectedValue('Error')
    request(app)
    .get("/api/contents/1")
    .set("access_token",access_token)
    .then((resp) =>{
       console.log(resp.body, '>>>>>>>>>>>>>>>> error 500') 
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

test("[GET/api/contents/:id ERROR] - should be return object with status code 200 not News with id", (done) =>{
    request(app)
     .get("/api/contents/62")
     .set("access_token",access_token)
     .then((resp) =>{
         expect(resp.status).toBe(401)
         expect(resp.body).toEqual(expect.any(Object))
         expect(resp.body).toHaveProperty("error")
        expect(resp.body.error).toBe('Content Not Found')
         done()
     })
     .catch((err) =>{
         console.log(err)
     })
})

test("[GET/api/contents/;id ERROR]  - should be return object with status code 401", (done) =>{
    request(app)
    .get("/api/contents/1")
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

// // POST CONTENT
test("[POST/api/contents success] - should be return object with status code 201", (done) =>{
    request(app)
    .post("/api/contents")
    .set("access_token",access_token)
    .send({
        title: "Program untuk Expert 3",
        description: "Program latihan di Gym",
        youtubeUrl: "https://www.youtube.com/watch?v=sNgZRSSHvs4",
        LevelId: 3,
        imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ"

     })
    .then((resp) =>{
      
        expect(resp.status).toBe(201)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("title")
        expect(resp.body).toHaveProperty("description")
        expect(resp.body).toHaveProperty("youtubeUrl")
        expect(resp.body).toHaveProperty("likes")
        expect(resp.body).toHaveProperty("statusLike")
      
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
     })
})

test("[POST/api/contents ERROR] - should be return object with status code 401", (done) =>{
    request(app)
    .post("/api/contents")
    .set("access_token",access_token)
    .send({
        title: "",
        description: "",
        youtubeUrl: "",
        LevelId: "",
        imgThumbnail:""

     })
    .then((resp) =>{
        
        expect(resp.status).toBe(400)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
       
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
})

test("[POST/api/contents ERROR] - should be return object with status code 401", (done) =>{
        request(app)
        .post("/api/contents")
        .send({
            title: "",
            description: "",
            youtubeUrl: "",
            Likes:"",
            statusLike: "",
            LevelId: "",
            imgThumbnail:""
    
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

// // // PUT CONTENT
test("[PUT/api/contents/:id success] - should be return object with status code 200", (done) =>{
    request(app)
    .put("/api/contents/1")
    .set("access_token",access_token)
    .send({
        title: "Program untuk Expert 3",
        description: "Program latihan di Gym nasti",
        youtubeUrl: "https://www.youtube.com/watch?v=sNgZRSSHvs4",
        likes: 200,
        statusLike: "not like",
        LevelId: 3,
        imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ"

     })
    .then((resp) =>{
        expect(resp.status).toBe(200)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("title")
        expect(resp.body).toHaveProperty("description")
        expect(resp.body).toHaveProperty("youtubeUrl")
        expect(resp.body).toHaveProperty("likes")
        expect(resp.body).toHaveProperty("statusLike")
      
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
     })
})

test("[PUT/api/contents/:id ERROR] - should be return object with status code 401", (done) =>{
    request(app)
    .put("/api/contents/60")
    .set("access_token",access_token)
    .send({
        title: "Program untuk Expert 3",
        description: "Program latihan di Gym nasti",
        youtubeUrl: "https://www.youtube.com/watch?v=sNgZRSSHvs4",
        likes: 200,
        statusLike: "not like",
        LevelId: 3,
        imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ"

     })
    .then((resp) =>{
        expect(resp.status).toBe(401)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
        expect(resp.body.error).toBe('Content Not Found')
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
     })
})
    
test("[PUT/api/contents/:id ERROR] - should be return object with status code 400", (done) =>{
    request(app)
    .put("/api/contents/1")
    .set("access_token",access_token)
    .send({
        title: "",
        description: "",
        youtubeUrl: "",
        likes: "",
        statusLike: "",
        LevelId: "",
        imgThumbnail:""

     })
    .then((resp) =>{
        expect(resp.status).toBe(400)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
       
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
})

test("[PUT/api/contents/:id ERROR] - should be return object with status code 401", (done) =>{
        request(app)
        .put("/api/contents/1")
        .send({
            title: "",
            description: "",
            youtubeUrl: "",
            likes: "",
            statusLike: "",
            LevelId: "",
            imgThumbnail:""
    
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

// // // PATCH CONTENT
test("[PATCH/api/contents/:id success] - status like should be return object with status code 200", (done) =>{
    request(app)
    .patch("/api/contents/1")
    .set("access_token",access_token)
    .send({
        statusLike: "like",
     })
    .then((resp) =>{
        
        expect(resp.status).toBe(200)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("title")
        expect(resp.body).toHaveProperty("description")
        expect(resp.body).toHaveProperty("youtubeUrl")
        expect(resp.body).toHaveProperty("likes")
        expect(resp.body).toHaveProperty("statusLike")
      
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
     })
})

test("[PATCH/api/contents/:id success] - status not like should be return object with status code 200", (done) =>{
    request(app)
    .patch("/api/contents/1")
    .set("access_token",access_token)
    .send({
        statusLike: "not like",
     })
    .then((resp) =>{
        
        expect(resp.status).toBe(200)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("title")
        expect(resp.body).toHaveProperty("description")
        expect(resp.body).toHaveProperty("youtubeUrl")
        expect(resp.body).toHaveProperty("likes")
        expect(resp.body).toHaveProperty("statusLike")
      
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
     })
})



test("[PATCH/api/contents/:id ERROR] - should be return object with status code 401", (done) =>{
    request(app)
    .patch("/api/contents/60")
    .set("access_token",access_token)
    .send({
        statusLike: "not like",
     })
    .then((resp) =>{
        
        expect(resp.status).toBe(401)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
        expect(resp.body.error).toBe('Content Not Found')
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
     })
})
    
test("[PATCH/api/contents/:id ERROR] - should be return object with status code 400", (done) =>{
    request(app)
    .patch("/api/contents/1")
    .set("access_token",access_token)
    .send({
        statusLike: "",
     })
    .then((resp) =>{
        expect(resp.status).toBe(400)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
       
        
        
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
})

    
test("[PATCH/api/contents/:id ERROR] - should be return object with status code 401", (done) =>{
        request(app)
        .patch("/api/contents/1")
        .send({
            statusLike: "",
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

// // // DELETE CONTENT
test("[DELETE/api/contents/:id success] - should be return object with status code 200", (done) =>{
    request(app)
    .delete("/api/contents/1")
    .set("access_token",access_token)
    .then((resp) =>{
        expect(resp.status).toBe(200)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("message")
        expect(resp.body.message).toBe('Id 1 success deleted')
        
        done()
    })
    .catch((err) =>{
        console.log(err)
     })
})

test("[DELETE/api/contents/:id ERROR] - should be return object with status code 401", (done) =>{
    request(app)
    .delete("/api/contents/60")
    .set("access_token",access_token)
    .then((resp) =>{
        expect(resp.status).toBe(401)
        expect(resp.body).toEqual(expect.any(Object))
        expect(resp.body).toHaveProperty("error")
        expect(resp.body.error).toBe('Content Not Found')
        done()
    })
    .catch((err) =>{
        console.log(err)
    })
})
    
 
test("[DELETE/api/contents/:id ERROR] - should be return object with status code 401", (done) =>{
    request(app)
    .delete("/api/contents/2")
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

