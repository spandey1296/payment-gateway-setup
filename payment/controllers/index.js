"use strict";
const  getUserPaymentDetails = require("./get-user-payment-info");
const addUserPaymentDetails=require("./add-user-payment-info"); 
const updateUserPaymentDetails= require("./update-user-payment-info"); 
module.exports = {
  getUserPaymentDetails,
  addUserPaymentDetails,
  updateUserPaymentDetails
};
