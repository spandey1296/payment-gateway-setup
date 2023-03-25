"use strict";

const express = require("express");
const routes = express.Router();
const controller = require("./controllers");

routes.get("/user/list/paymentdetails", controller.getUserPaymentDetails);
routes.post("/user/add/paymentdetails", controller.addUserPaymentDetails);
routes.put("/user/update/paymentdetails", controller.updateUserPaymentDetails);

module.exports = routes;
