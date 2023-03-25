"use strict";

const cardPlayPool = require("../../utils/db-connection").cardPlayPool;
const moment = require("moment");

module.exports = class RawQueries {
  static async getUserAllPaymentDetails({ userId }) {
    try {
      const userQuery = `select * from cp_user_bank_testing where ${userId}`;
      const [user] = await cardPlayPool.query(userQuery);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUserPaymentDetails(userId) {
    try {
      let query = `UPDATE cp_user_bank_testing SET primary_bank='0' WHERE user_id = $userId`;
      let [result] = await cardPlayPool.query(query, {
        bind: {
          userId,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateUserPaymentOption(bankId) {
    try {
      let query = `UPDATE cp_user_bank_testing SET primary_bank='1' WHERE id = $bankId`;
      let [result] = await cardPlayPool.query(query, {
        bind: {
          bankId,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async insertUserPaymentDetails(
    userId,
    type,
    accountNumber = null,
    bankName = "",
    ifsc = "",
    upiNumber = ""
  ) {
    try {
      let linuxAddedOn = moment().unix();
      let linuxModifiedOn = moment().unix();
      let query = `INSERT INTO  cp_user_bank_testing (user_id,type,account_number,bank_name ,  ifsc_code ,  upi_number , linux_added_on ,  linux_modified_on ) VALUES (:userId, :type, :accountNumber, :bankName, :ifsc, :upiNumber, :linuxAddedOn, :linuxModifiedOn)`;
      let [result] = await cardPlayPool.query(query, {
        replacements: {
          userId,
          type,
          accountNumber,
          bankName,
          ifsc,
          upiNumber,
          linuxAddedOn,
          linuxModifiedOn,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
};
