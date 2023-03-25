"use strict";
const responseMessage = require("./response-message");

module.exports = class utils {
  static responseFormat(code = 200, data = {}, message = "") {
    return {
      code: code,
      data: data,
      message: message,
    };
  }
};
