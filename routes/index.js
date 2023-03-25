"use strict";
const paymentGateway = require("../payment");

module.exports = function (app) {
  app.use("/api/v1/payment", paymentGateway);
  app.get("/api/v1/payment/server_time", function (req, res, next) {
    res.json({ serverTime: Date.now() });
  });
};
