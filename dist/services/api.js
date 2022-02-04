"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var axios_1 = __importDefault(require("axios"));
var api = axios_1["default"].create({
    baseURL: "https://ontime.sinclog.com.br/"
});
exports["default"] = api;
//# sourceMappingURL=api.js.map