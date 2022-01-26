const { User, UserProfile, Log, Level } = require("../models");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const axios = require("axios");
const { sequelize } = require("../models");

class userProfilesController {
  static async createUserProfile(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id: UserId } = req.user;
      const {
        height,
        weight,
        activityLevel,
        phoneNumber,
        gender,
        dateBirth,
        goals,
      } = req.body;

      console.log({
        height,
        weight,
        activityLevel,
        phoneNumber,
        gender,
        dateBirth,
        goals,
        UserId,
      });

      if (
        !height ||
        !weight ||
        !activityLevel ||
        !phoneNumber ||
        !gender ||
        !dateBirth ||
        !goals
      )
        throw { name: "Bad_Request" };

      let LevelId = 1;

      let date = dateBirth.split("-");
      const day = date[0];
      const month = date[1];
      const year = date[2];

      let today = new Date();
      let birthDate = new Date(year, month, day);
      let age = today.getFullYear() - birthDate.getFullYear();

      console.log({ age });
      let callBMI = await axios({
        method: "GET",
        url: "https://fitness-calculator.p.rapidapi.com/bmi",
        params: { age, weight, height },
        headers: {
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca",
        },
      });
      console.log({ callBMI });
      if (
        callBMI.data.data.health == "Severe Thinness" ||
        callBMI.data.data.health == "Moderate Thinness" ||
        callBMI.data.data.health == "Mild Thinness"
      ) {
        LevelId = 1;
      } else if (
        callBMI.data.data.health == "Normal" ||
        callBMI.data.data.health == "Healthy weight"
      ) {
        LevelId = 2;
      } else {
        LevelId = 3;
      }

      console.log({
        UserId,
        phoneNumber,
        subscription: "false",
        gender,
        dateBirth: birthDate,
        goals,
        LevelId,
        bmi: callBMI.data.data.bmi,
        health: callBMI.data.data.health,
        healthy_bmi_range: callBMI.data.data.healthy_bmi_range,
      });
      const postUserProfile = await UserProfile.create(
        {
          UserId,
          phoneNumber,
          subscription: "false",
          gender,
          dateBirth: birthDate,
          goals,
          LevelId,
          bmi: callBMI.data.data.bmi,
          health: callBMI.data.data.health,
          healthy_bmi_range: callBMI.data.data.healthy_bmi_range,
        },
        { transaction: t }
      );

      // Update Log
      await Log.create(
        {
          height,
          weight,
          bmi: postUserProfile.bmi,
          health: postUserProfile.health,
          UserId,
          LevelId,
        },
        { transaction: t }
      );

      await User.update(
        {
          isRegister: "true",
        },
        {
          where: {
            id: UserId,
          },
        },
        { transaction: t, returning: true }
      );

      await t.commit();

      const levelUser = await Level.findOne({
        where: {
          id: LevelId,
        },
      });

      res.status(201).json({
        message: `Your health status is ${callBMI.data.data.health}, so you will be in the ${levelUser.name} Level!`,
      });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  //PAYMENT
  // static async paymentStripe(req, res, next) {
  //   try {
  //     // Getting data from client
  //     let { subscription } = req.body;
  //     // Simple validation
  //     if (!subscription)
  //       return res.status(400).json({ message: "Invalid data" });

  //     // Initiate payment
  //     const paymentIntent = await stripe.paymentIntents.create({
  //       currency: "USD",
  //       payment_method_types: ["card"],
  //       metadata: { subscription },
  //     });
  //     // Extracting the client secret
  //     const clientSecret = paymentIntent.client_secret;
  //     // Sending the client secret as response
  //     res.json({ message: "Payment initiated", clientSecret });
  //   } catch (err) {
  //     // Catch any error and send error 500 to client
  //     console.error(err);
  //     res.status(500).json({ message: "Internal Server Error" });
  //   }
  // }

  // static async stripe(req, res, next) {
  //   const sig = req.headers["stripe-signature"];

  //   let event;

  //   try {
  //     // Check if the event is sent from Stripe or a third party
  //     // And parse the event
  //     event = await stripe.webhooks.constructEvent(
  //       req.body,
  //       sig,
  //       process.env.STRIPE_WEBHOOK_SECRET
  //     );
  //   } catch (err) {
  //     // Handle what happens if the event is not from Stripe
  //     console.log(err);
  //     return res.status(400).json({ message: err.message });
  //   }
  //   // Event when a payment is initiated
  //   if (event.type === "payment_intent.created") {
  //     console.log(
  //       `${event.data.object.metadata.subscription} payment initated!`
  //     );
  //   }
  //   // Event when a payment is succeeded
  //   if (event.type === "payment_intent.succeeded") {
  //     // fulfilment
  //     console.log(
  //       `${event.data.object.metadata.subscription} payment succeeded!`
  //     );
  //   }
  //   res.json({ ok: true });
  // }

  static async updateSubscription(req, res, next) {
    try {
      const { id: UserId } = req.user;
      await UserProfile.update(
        {
          subscription: "true",
        },
        {
          where: {
            UserId,
          },
        }
      );

      res.status(200).json({
        message: `Thank you for your subsciption`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getUserProfile(req, res, next) {
    try {
      const UserId = req.user.id;
      console.log({UserId});
      const response = await UserProfile.findOne({
        where: {
          UserId,
        },
        include: [
          {
            model: Level,
          },
          {
            model: User,
          },
        ],
      });

      const newestLog = await Log.findAll({
        where: {
          UserId,
        },
        order: [["updatedAt", "DESC"]],
      });

      res.status(200).json({
        UserProfile: response,
        Log: newestLog[0],
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userProfilesController;
