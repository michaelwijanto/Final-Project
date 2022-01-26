const midtransClient = require("midtrans-client");
const { UserProfile } = require("../models");

class PaymentController {
  static async transactionToken(req, res, next) {
    const { id, email, fullName } = req.user;

    try {
      const { phoneNumber } = await UserProfile.findOne({
        where: {
          UserId: id,
        },
      });

      let temp = "";
      for (let i = 0; i < 6; i++) {
        temp += Math.floor(Math.random() * 10);
      }

      // Create Snap API instance
      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: "SB-Mid-server-l9wW5qrlu49-K4seZHSDCOAq",
      });

      let parameter = {
        transaction_details: {
          order_id: "ACTIVE8-SUBSCRIPTION-" + temp,
          gross_amount: 199_000,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: fullName,
          email: email,
          phone: phoneNumber,
        },
      };

      snap
        .createTransaction(parameter)
        .then((transaction) => {
          // transaction token
          let transactionToken = transaction.token;
          res.status(200).json({
            token: transactionToken,
          });
        })
        .catch((err) => {
          next(err);
        });
    } catch (error) {
      next(error);
    }
  }

  static async updatePayment(req, res, next) {
    try {
      const { id } = req.user;

      const update = await UserProfile.update(
        {
          subscription: "true",
        },
        {
          where: {
            UserId: id,
          },
          returning: true,
        }
      );

      res.status(200).json(update);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PaymentController;
