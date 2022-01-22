"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Coaches",
      [
        {
          name: "Tondiki",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/WhatsApp_Image_2022-01-15_at_00.02.10.jpeg_NlyT9AIyg8I.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642860034024",
          age: "20",
          bio: "This is tondiki This is tondiki This is tondiki This is tondiki This is tondiki This is tondiki This is tondiki This is tondiki",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Arie",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/DSC01014_F9VZcfWrs.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1642860034438",
          age: "24",
          bio: "This is Arie This is Arie This is Arie This is Arie This is Arie This is Arie This is Arie This is Arie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wisnu",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/Foto_Whisnu_Budi_Hantoro_5Wk7RJBxl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642860033957",
          age: "23",
          bio: "This is Wisnu This is Wisnu This is Wisnu This is Wisnu This is Wisnu This is Wisnu This is Wisnu This is Wisnu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Michael",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/174562a5167b464dc8b46ef9778359b7fbf1b2601c6f009f87e0ccc544fbb1cc.png_og0HhYYVf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642860033841",
          age: "21",
          bio: "This is Michael This is Michael This is Michael This is Michael This is Michael This is Michael This is Michael This is Michael",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andre",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/WhatsApp_Image_2022-01-14_at_23.23.28_RoTB47NKV.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1642860033784",
          age: "22",
          bio: "This is Andre This is Andre This is Andre This is Andre This is Andre This is Andre This is Andre This is Andre",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Coaches", null, {});
  },
};
