"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const aws_sdk_1 = require("aws-sdk");
const uuid_1 = require("uuid");
const hello = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    const dynamoDB = new aws_sdk_1.DynamoDB.DocumentClient();
    const data = {
        TableName: process.env.DbTableName || '',
        Item: {
            id: uuid_1.v4(),
            createdAt: new Date().toISOString(),
            name: 'testname',
        },
    };
    yield dynamoDB.put(data).promise();
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'github actions',
        }),
    };
    return response;
});
exports.hello = hello;
//# sourceMappingURL=handler.js.map