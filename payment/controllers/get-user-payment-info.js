"use strict";
const { userPaymentDetails } = require("../services/index");
const Util = require("../../utils/utils");

const getUserPaymentDetails = async (req, res) => {
  let response = Util.responseFormat();
  try {
    let result = await userPaymentDetails.getPaymentSavedList(req);
    res.json(Util.responseFormat(result.code, result.message, result.data));
  } catch (error) {
    throw error;
  }
};

module.exports = getUserPaymentDetails;
