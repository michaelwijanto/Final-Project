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
            "`Behind every great athlete is a masterful coach that inspires the athlete to evolve into the strongest performer they can become.` Cathy Engelbert ",
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
            "`Gaya hidup sehat bukanlah barang yang bisa dibeli, tapi kebiasaan yang harus Anda lakukan secara rutin.` Denny Santoso",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wisnu",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/Foto_Whisnu_Budi_Hantoro_5Wk7RJBxl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642860033957",
          age: "23",
          bio: "CPT Certification",
          description:
            "`If when you look in the mirror you don't see the perfect version of yourself, you better see the hardest working version of yourself.` Chris Bumstead",
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
            "`Ketimbang kita berfokus dalam hal ini memuja-muji kehebatan dari sebuah kesakitan, kenapa gak kita berfokus memuja-muji kehebatan dari sebuah badan.` Ade Rai",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andre",
          imgCoach:
            "https://ik.imagekit.io/ebq3r9zrvle/H8/WhatsApp_Image_2022-01-26_at_19.12.03_DBeX2oczN.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1643199298745",
          age: "22",
          bio: "CPT Certification",
          description:
            "`Everybody wants to be a bodybuilder, but don't nobody wanna lift  no heavy ass weight.` Ronnie Coleman",
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
