"use strict";
const { userPaymentDetails } = require("../services/index");
const Util = require("../../utils/utils");

const addUserPaymentDetails = async (req, res) => {
  try {
    let response = await userPaymentDetails.addPaymentSavedList(req);
    res.json(
      Util.responseFormat(response.code, response.message, response.data)
    );
  } catch (error) {
    throw error;
  }
};
module.exports = addUserPaymentDetails;
