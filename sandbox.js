const request = require('supertest')
const app = require('../app')

const { UserContent, Content, User,UserProfile,Log,Level } = require('../models')

let access_token = ''

beforeAll( () => {
  
    
     User.destroy({
      where: {},
      truncate: true,
      restartIdentity: true,
      cascade: true,
    })
   
  
      Content.destroy({
      where: {},
      truncate: true,
      restartIdentity: true,
      cascade: true,
    })
  
     UserContent.destroy({
      where: {},
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
     UserProfile.destroy({
      where: {},
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
     Level.destroy({
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
        email: "ariesastra@gmail.com",
        password: "password",
        fullName: "Arie Sastra",
        role: "admin",
        isRegister: "true",
        pin: "123456",
        isActivated: "true",
      })
       UserProfile.bulkCreate([
        {
            UserId: 1,
            phoneNumber: "098753688965",
            subscription: "false",
            gender:"Male",
            dateBirth: new Date(),
            goals: "sixpack",
            LevelId: 1,
            bmi:'18',
            health:"Normal",
            healthy_bmi_range:"18.25-19.00",
            createdAt: new Date(),
            updateedAt: new Date()
          }
        ])
      
       Content.bulkCreate([
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




test("[POST/api/users/login success] - should be return object with status code 200", (done) =>{
  request(app)
   .post("/api/users/login")
   .send({
    email: "ariesastra@gmail.com",
    password: "password",
   })
   .then((resp) =>{ 
       access_token = resp.body.access_token 
      console.log(resp.body)
       expect(resp.status).toBe(200)
       expect(resp.body).toEqual(expect.any(Object))
      //  expect(resp.body).toHaveProperty("access_token")
      
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
        height: "140",
        weight: "60",
        activityLevel: "4",
        phoneNumber: "081123123123",
        subscription: "false",
        gender: "male",
        dateBirth: "30-12-2000",
        goals: "weightlose",
        bmi:'18',
        health:"Normal",
        healthy_bmi_range:"18.25-19.00",
      })
      .then((res) => {
        const result = res.body;
        expect(res.status).toBe(201);
        expect(result).toEqual(expect.any(Object));
        // expect(result).toHaveProperty("message");
        done();
      })
      .catch((err) => {
        console.log(er)
      });
  });


describe("USER CONTENT TEST", _ => {
  test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "1",
          
        })
        .then(res => {
          const result = res.body;
         
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });

    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "1",
          
        })
        .then(res => {
          const result = res.body;
          console.log(res.body,res.status, '>>>>>>>>>>>>>>>>>>>>>>>>> ini harusnya content')
          expect(res.status).toBe(200);
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("message");
          // expect(result).toHaveProperty("UserId");
          // expect(result).toHaveProperty("ContentId");
          // expect(result).toHaveProperty("status");
          // done();
        })
        .catch(error => {
          done(error);
        });
    });

    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "2"
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });

    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "3"
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "4"
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "5"
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "6"
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "7"
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "8"
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "9"
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("UserId");
          expect(result).toHaveProperty("ContentId");
          expect(result).toHaveProperty("status");
          done();
        })
        .catch(error => {
          done(error);
        });
    });

  test('/POST - User Contents - Empty Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: ""
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("error");
          done();
        })
          .catch(error => {
          done(error);
        });
    });
  test('/POST - User Contents - Invalid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          // empty body
        })
        .then(res => {
          const result = res.body;
          expect.status = 201;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("error");
          done();
        })
        .catch(error => {
          done(error);
        });
    });

  test('/GET - User Content - Authenticated',
    (done) => {
      request(app)
        .get("/api/user-contents")
        .set({access_token})
        .then(res => {
          const result = res.body;
          expect(res.status).toBe(200)
          expect(result).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                id: result[0].id,
                UserId: result[0].UserId,
                ContentId: result[0].ContentId,
                status: result[0].status,
                User: expect.objectContaining({
                  id: result[0].User.id,
                  email: result[0].User.email,
                  password: result[0].User.password,
                  fullName: result[0].User.fullName,
                  role: result[0].User.role,
                  isRegister: result[0].User.isRegister,
                }),
                Content: expect.objectContaining({
                  id: result[0].Content.id,
                  youtubeUrl: result[0].Content.youtubeUrl,
                  imgThumbnail: result[0].Content.imgThumbnail,
                  description: result[0].Content.description,
                  LevelId: result[0].Content.LevelId,
                  likes: result[0].Content.likes,
                  statusLike: result[0].Content.statusLike,
                  title: result[0].Content.title
                })
              })
            ]));

          done();
        })
        .catch(error => {
          done(error);
        });
    });
  test('/GET - User Content - Unauthenticated',
    (done) => {
      request(app)
        .get("/api/user-contents")
        .then(res => {
          const result = res.body;
          expect(res.status).toBe(401)
          expect(result).toEqual(expect.any(Object))
          expect(result).toHaveProperty("error");
          expect(result.error).toBe('Invalid token')  
          done();
        })
        .catch(error => {
          done(error);
        });
    });

  test('/GET - User Content - Valid',
    (done) => {
      request(app)
        .get("/api/user-contents/1")
        .set({access_token})
        .then(res => {
          const result = res.body;
            expect(res.status).toBe(200)
          expect(result).toEqual(expect.any(Object));
          expect(result).toEqual(
            expect.objectContaining({
              id: result.id,
              UserId: result.UserId,
              ContentId: result.ContentId,
              status: result.status,
              User: expect.objectContaining({
                id: result.User.id,
                email: result.User.email,
                password: result.User.password,
                fullName: result.User.fullName,
                role: result.User.role,
                isRegister: result.User.isRegister,
              }),
              Content: expect.objectContaining({
                id: result.Content.id,
                youtubeUrl: result.Content.youtubeUrl,
                imgThumbnail: result.Content.imgThumbnail,
                description: result.Content.description,
                LevelId: result.Content.LevelId,
                likes: result.Content.likes,
                statusLike: result.Content.statusLike,
                title: result.Content.title
              })
            })
            );

          done();
        })
        .catch(error => {
          done(error);
        });
    });


    test('/GET - User Content - Valid',
    (done) => {
      request(app)
        .get("/api/user-contents/1")
        .then(res => {
          const result = res.body;
          expect(res.status).toBe(401)
          expect(result).toEqual(expect.any(Object))
          expect(result).toHaveProperty("error");
          expect(result.error).toBe('Invalid token')  
          done();
        })
        .catch(error => {
          done(error);
        });
    });


  test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/1")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result, ">>>>>>>>>>>>>> ini dari put")
          expect(res.status).toBe(200)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("message");
          done();
        })
        .catch(error => {
          done(error);
        });
    });

    test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/2")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result, ">>>>>>>>>>>>>> ini dari put 2")
          expect(res.status).toBe(200)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("message");
          done();
        })
        .catch(error => {
          done(error);
        });
    });

    test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/3")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result,res.status, ">>>>>>>>>>>>>> ini dari put 3")
          expect(res.status).toBe(400)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("error");
          done();
        })
        .catch(error => {
          done(error);
        });
    });

    test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/4")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result, ">>>>>>>>>>>>>> ini dari put 4")
          expect(res.status).toBe(200)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("message");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/5")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result, ">>>>>>>>>>>>>> ini dari put 5")
          expect(res.status).toBe(200)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("message");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/6")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result, ">>>>>>>>>>>>>> ini dari put 6")
          expect(res.status).toBe(400)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("error");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/7")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result, ">>>>>>>>>>>>>> ini dari put 7")
          expect(res.status).toBe(200)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("message");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/8")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result, ">>>>>>>>>>>>>> ini dari put 8")
          expect(res.status).toBe(200)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("message");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
    test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/9")
        .set({access_token})
        .then(res => {
          const result = res.body; 
          console.log(result, ">>>>>>>>>>>>>> ini dari put 9")
          expect(res.status).toBe(200)
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("message");
          done();
        })
        .catch(error => {
          done(error);
        });
    });

    
  test('/PUT - User Content Not Found',
  (done) => {
    request(app)
      .put("/api/user-contents/100")
      .set({access_token})
      .then(res => {
        const result = res.body; 
        expect(res.status).toBe(401)
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error");
        expect(result.error).toBe('Content Not Found')  
        done();
      })
      .catch(error => {
        done(error);
      });
  });

  test('/PUT - User Content Invalid token',
  (done) => {
    request(app)
      .put("/api/user-contents/1")
      .then(res => {
        const result = res.body; 
        expect(res.status).toBe(401)
        expect(result).toEqual(expect.any(Object));
        expect(result).toHaveProperty("error");
        expect(result.error).toBe('Invalid token')  
        done();
      })
      .catch(error => {
        done(error);
      });
  });

  

});



test("[GET/api/user-contents ERROR]  - should be return object with status code 500", (done) =>{
    jest.spyOn(UserContent, 'findAll').mockRejectedValue('Error')
    request(app)
    .get("/api/user-contents")
    .set({access_token})
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

test("[GET/api/user-contents/:id ERROR]  - should be return object with status code 500", (done) =>{
    jest.spyOn(UserContent, 'findOne').mockRejectedValue('Error')
    request(app)
    .get("/api/user-contents/1")
    .set({access_token})
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

