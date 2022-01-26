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
          bio: "BNSP Certification",
          description:
            "Hello Tondiki here! I'm here as a BNSP certified Personal Trainer (Badan Nasional Sertifikat Profesi) who will help you achieve your ideal body! I used to help at the easy level!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Arie",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/DSC01014_F9VZcfWrs.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1642860034438",
          age: "24",
          bio: "RAI Institute Certification",
          description:
            "Hello, Arie here! I am a Personal Trainer here who passed the RAI Institute certification. I am ready to help you to achieve your goals! I can train at medium level. So, see you there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Whisnu",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/Foto_Whisnu_Budi_Hantoro_5Wk7RJBxl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642860033957",
          age: "23",
          bio: "CPT Certification",
          description:
            "Hello, I'm Whisnu! I'm a CPT Certified Personal Trainer here. To lose the overweight, don't be shy! I often train for people who are overweight and want to lose it precisely and efficiently of course.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Michael",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/cropped_Dy_k38LUI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643198845228",
          age: "21",
          bio: "BNSP Certification",
          description:
            "Hi, I'm Michael! I am a BNSP certified Personal Trainer here. And fun fact, I'm a senior from Coach Tondiki! So, for those of you who are familiar with the world of fitness, you can contact me. I'm usually at hard level. So what are you waiting for?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andre",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/WhatsApp_Image_2022-01-26_at_19.12.03_DBeX2oczN.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1643199298745",
          age: "22",
          bio: "RAI Institute Certification",
          description:
            "Hello there, I'm Andre! I'm a certified Personal Trainer from the RAI Institute here. I train quite often for people who want to shape their bodies to be more athletic with enough exercise intensity. So don't be surprised if you meet me! Cheerios!",
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
