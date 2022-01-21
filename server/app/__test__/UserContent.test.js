const request = require('supertest')
const app = require('../app')

const { UserContent, Content, User } = require('../models')

let access_token = ''

beforeAll(() => {
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

  User.create({
    email: "ariesastra@mail.com",
    password: "password",
    fullName: "Arie Sastra",
    role: "admin",
    isRegister: "false",
  })

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
    // {
    //   title: "Program untuk pemula 2",
    //   description: "7 Hari Jadwal latihan otot di rumah.",
    //   youtubeUrl: "https://www.youtube.com/watch?v=lppA33-4Sdo",
    //   imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
    //   likes: 2000,
    //   statusLike: "not like",
    //   LevelId: 1,
    //   createdAt: new Date(),
    //   updateedAt: new Date()
    // },
    // {
    //   title: "Program untuk pemula 3",
    //   description: "7 HARIMEMBENTUK OTOT DIRUMAH TANPA ALAT SATU PUN !!!... LATIHAN CALISTHENICS UNTUK PEMULA DARI NOL",
    //   youtubeUrl: "https://www.youtube.com/watch?v=JdlPviK2Dws",
    //   imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
    //   likes: 2000,
    //   statusLike: "not like",
    //   LevelId: 1,
    //   createdAt: new Date(),
    //   updateedAt: new Date()
    // },
    // {
    //   title: "Program untuk Intermediete 1",
    //   description: "7 Hari Bakar Lemak Seluruh Tubuh dengan Senam Aerobik Selama 15 Menit.",
    //   youtubeUrl: "https://www.youtube.com/watch?v=q7ThUwbRfdw&list=PLFCuzxdXaCc38p2skVkR6d8rl2nEdz6IB&index=5",
    //   imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
    //   likes: 20000,
    //   statusLike: "not like",
    //   LevelId: 2,
    //   createdAt: new Date(),
    //   updateedAt: new Date()
    // },
    // {
    //   title: "Program untuk Intermediete 2",
    //   description: "Olahraga 10 Menit Bakar Lemak Perut dan Paha Tanpa Alat | Olahraga di Rumah",
    //   youtubeUrl: "https://www.youtube.com/watch?v=XNwcdekqqNA",
    //   imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
    //   likes: 50000,
    //   statusLike: "not like",
    //   LevelId: 2,
    //   createdAt: new Date(),
    //   updateedAt: new Date()
    // },
    // {
    //   title: "Program untuk Intermediete 3",
    //   description: "13 LATIHAN TERBAIK DI RUMAH TANPA ALAT GYM",
    //   youtubeUrl: "https://www.youtube.com/watch?v=dZ0XZBtaASE",
    //   imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
    //   likes: 50000,
    //   statusLike: "not like",
    //   LevelId: 2,
    //   createdAt: new Date(),
    //   updateedAt: new Date()
    // },
    // {
    //   title: "Program untuk Expert 1",
    //   description: "7 Hari Menghilangkan Lemak dengan Senam Aerobik! Bakar Kalori Seluruh Tubuh",
    //   youtubeUrl: "https://www.youtube.com/watch?v=z2E6uO9oIxM&list=PLFCuzxdXaCc38p2skVkR6d8rl2nEdz6IB&index=7",
    //   imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
    //   likes: 100000,
    //   statusLike: "not like",
    //   LevelId: 3,
    //   createdAt: new Date(),
    //   updateedAt: new Date()
    // },
    // {
    //   title: "Program untuk Expert 2",
    //   description: "20 Menit Full Body Workout di Rumah",
    //   youtubeUrl: "https://www.youtube.com/watch?v=WTqrBmCz2R4",
    //   imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
    //   likes: 200000,
    //   statusLike: "not like",
    //   LevelId: 3,
    //   createdAt: new Date(),
    //   updateedAt: new Date()
    // },
    // {
    //   title: "Program untuk Expert 3",
    //   description: "Program latihan di Gym",
    //   youtubeUrl: "https://www.youtube.com/watch?v=sNgZRSSHvs4",
    //   imgThumbnail:"https://i.ytimg.com/vi/l3Z_O2hUTM8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAw6intqe7S0_0BL4_wf4j5Fo8cHQ",
    //   likes: 240000,
    //   statusLike: "not like",
    //   LevelId: 3,
    //   createdAt: new Date(),
    //   updateedAt: new Date()
    // }
  ])
})

describe("SET TOKEN", _ => {
  test('/login - GET TOKEN',
    (done) => {
      request(app)
        .post("/api/users/login")
        .send({
          email: "ariesastra@mail.com",
          password: "password",
        })
        .then(res => {
          const result = res.body;
          access_token = result.access_token;

          expect.status = 200;
          expect(result).toEqual(expect.any(Object));
          expect(result).toHaveProperty("access_token");

          done();
        })
        .catch(error => {
          done(error)
        })
    });
})

describe("USER CONTENT TEST", _ => {
  test('/POST - User Contents - Valid Input',
    (done) => {
      request(app)
        .post("/api/user-contents")
        .set({ access_token })
        .send({
          ContentId: "1"
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
          expect(result).toHaveProperty("message");
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
          expect(result).toHaveProperty("message");
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
          expect.status = 400;
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
          expect.status = 400;
          expect(result).toEqual(expect.any(Object))
          expect(result).toHaveProperty("message");

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
          expect.status = 400;
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

  test('/PUT - User Content',
    (done) => {
      request(app)
        .put("/api/user-contents/1")
        .set({access_token})
        .then(res => {
          const result = res.body;
          // console.log(result);
          expect.status = 400;
          expect(result).toEqual(expect.any(Object));
          done();
        })
        .catch(error => {
          done(error);
        });
    });

  // test('/customer-register - Email string kosong',
  //   (done) => {
  //     request(app)
  //       .post("/customer-register")
  //       .send({
  //         username: "admin",
  //         email: "",
  //         password: "password",
  //         role: '',
  //         phoneNumber: "0987654321",
  //         address: "Serpong"
  //       })
  //       .then(res => {
  //         const result = res.body;

  //         expect.status = 400;
  //         expect(result).toEqual(expect.any(Object));
  //         expect(result).toHaveProperty("msg", expect.arrayContaining(
  //           [
  //             "Please input your Email",
  //             "Please input email format"
  //           ])
  //         );

  //         done();
  //       })
  //       .catch(error => {
  //         done(error);
  //       });
  //   });

  // test('/customer-register - Email sudah terdaftar',
  //   (done) => {
  //     request(app)
  //       .post("/customer-register")
  //       .send({
  //         username: "Customer",
  //         email: "customer@mail.com",
  //         password: "password",
  //         role: '',
  //         phoneNumber: "0987654321",
  //         address: "Serpong"
  //       })
  //       .then(res => {
  //         const result = res.body;

  //         expect.status = 400;
  //         expect(result).toEqual(expect.any(Object));
  //         expect(result).toHaveProperty("msg", expect.arrayContaining(["Email already exists"]));

  //         done();
  //       })
  //       .catch(error => {
  //         done(error);
  //       });
  //   });

  // test('/customer-register - Format email salah / invalid',
  //   (done) => {
  //     request(app)
  //       .post("/customer-register")
  //       .send({
  //         username: "Customer",
  //         email: "customer.mail.com",
  //         password: "password",
  //         role: '',
  //         phoneNumber: "0987654321",
  //         address: "Serpong"
  //       })
  //       .then(res => {
  //         const result = res.body;

  //         expect.status = 400;
  //         expect(result).toEqual(expect.any(Object));
  //         expect(result).toHaveProperty("msg", expect.arrayContaining(["Please input email format"]));

  //         done();
  //       })
  //       .catch(error => {
  //         done(error);
  //       });
  //   });
});
