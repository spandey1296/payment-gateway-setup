"use strict";
const utils = require("../../utils/utils");
const rawQueryDao = require("../dao-manager/raw-queries-dao");
module.exports = class userPaymentDetails {
  static async getPaymentSavedList(req) {
    let response = utils.responseFormat();
    try {
      const paymentDetails = await rawQueryDao.getUserAllPaymentDetails(
        req.query
      );
      
      if (paymentDetails && paymentDetails.length > 0) {
        response.data = paymentDetails;
      } else {
        return response.status(404).json({
          code: 404,
          message: "Payment details not found",
          data: {},
        });
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async addPaymentSavedList(req) {
    try {
      let res = utils.responseFormat();
      console.log(req.body, "body......");
      const { userId, type, accountNumber, bankName, ifsc, upiNumber } =
        req.body;

      // Check if required parameters are provided
      if (!type || !userId) {
        (res.code = 400),
          (res.message = "Type and userId are required"),
          (res.data = {});
        return res;
      }
      await rawQueryDao.updateUserPaymentDetails(userId);
      // Handle UPI
      if (type == "upi") {
        if (!upiNumber) {
          (res.code = 400),
            (res.message = "UPI is required for type: upi"),
            (res.data = {});
          return res;
        } else {
          console.log("upi insert");
          await rawQueryDao.insertUserPaymentDetails(
            userId,
            type,
            accountNumber,
            bankName,
            ifsc,
            upiNumber
          );
        }
      }

      // Handle bank details
      if (type == "bank") {
        if (!accountNumber || !ifsc || !bankName) {
          (res.code = 400),
            (res.message =
              "accNumber, ifscCode, and bankName are required for type: bank"),
            (res.data = {});
        } else {
          console.log("bank insert");
          await rawQueryDao.insertUserPaymentDetails(
            userId,
            type,
            accountNumber,
            bankName,
            ifsc
          );
        }
      }

      (res.code = 200),
        (res.message = "Account has been added successfully!"),
        (res.data = {});
      return res;
    } catch (error) {
      throw error;
    }
  }

  static async updatePaymentSavedList(req) {
    try {
      let response = utils.responseFormat();
      console.log(req.body, "body......");
      const { id, userId } = req.body;

      let updateOldPaymentStatus = await rawQueryDao.updateUserPaymentDetails(
        userId
      );
      console.log(updateOldPaymentStatus, "updateOldPaymentStatus");
      if (updateOldPaymentStatus.affectedRows > 0) {
        let updatePaymentStattus = await rawQueryDao.updateUserPaymentOption(
          id
        );
      }

      return response;
    } catch (error) {
      throw error;
    }
  }
};
