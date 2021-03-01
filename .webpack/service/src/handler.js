/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hello = void 0;
const aws_sdk_1 = __webpack_require__(/*! aws-sdk */ "aws-sdk");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
function setupDynamoDB() {
    if (process.env.IS_LOCAL) {
        const host = process.env.DB_HOST;
        const port = process.env.DB_PORT;
        return new aws_sdk_1.DynamoDB.DocumentClient({
            region: host,
            accessKeyId: 'DEFAULT_ACCESS_KEY',
            secretAccessKey: 'DEFAULT_SECRET',
            endpoint: new aws_sdk_1.Endpoint(`http://${host}:${port}`),
        });
    }
    return new aws_sdk_1.DynamoDB.DocumentClient();
}
const hello = async (event, context) => {
    const dynamoDB = setupDynamoDB();
    const data = {
        TableName: process.env.DbTableName || '',
        Item: {
            id: uuid_1.v4(),
            createdAt: new Date().toISOString(),
            name: 'testname',
        },
    };
    console.log('writing data to db');
    await dynamoDB.put(data).promise();
    console.log('reading from db');
    const result = await dynamoDB
        .scan({
        TableName: 'projects',
    })
        .promise();
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};
exports.hello = hello;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJoYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFDQUE2QztBQUM3QywrQkFBMEI7QUFPMUIsU0FBUyxhQUFhO0lBQ3BCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDakMsT0FBTyxJQUFJLGtCQUFRLENBQUMsY0FBYyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxJQUFJO1lBQ1osV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxlQUFlLEVBQUUsZ0JBQWdCO1lBQ2pDLFFBQVEsRUFBRSxJQUFJLGtCQUFRLENBQUMsVUFBVSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7U0FDakQsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLElBQUksa0JBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQVksS0FBSyxFQUFFLEtBQVUsRUFBRSxPQUFnQixFQUFFLEVBQUU7SUFDNUQsTUFBTSxRQUFRLEdBQUcsYUFBYSxFQUFFLENBQUM7SUFFakMsTUFBTSxJQUFJLEdBQUc7UUFDWCxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksRUFBRTtRQUN4QyxJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUUsU0FBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ25DLElBQUksRUFBRSxVQUFVO1NBQ2pCO0tBQ0YsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUVsQyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUTtTQUMxQixJQUFJLENBQUM7UUFDSixTQUFTLEVBQUUsVUFBVTtLQUN0QixDQUFDO1NBQ0QsT0FBTyxFQUFFLENBQUM7SUFDYixNQUFNLFFBQVEsR0FBa0I7UUFDOUIsVUFBVSxFQUFFLEdBQUc7UUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7S0FDN0IsQ0FBQztJQUVGLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVPLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCwgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgRHluYW1vREIsIEVuZHBvaW50IH0gZnJvbSAnYXdzLXNkayc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbnRlcmZhY2UgSGVsbG9SZXNwb25zZSB7XG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcbiAgYm9keTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzZXR1cER5bmFtb0RCKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuSVNfTE9DQUwpIHtcbiAgICBjb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuREJfSE9TVDtcbiAgICBjb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuREJfUE9SVDtcbiAgICByZXR1cm4gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KHtcbiAgICAgIHJlZ2lvbjogaG9zdCxcbiAgICAgIGFjY2Vzc0tleUlkOiAnREVGQVVMVF9BQ0NFU1NfS0VZJyxcbiAgICAgIHNlY3JldEFjY2Vzc0tleTogJ0RFRkFVTFRfU0VDUkVUJyxcbiAgICAgIGVuZHBvaW50OiBuZXcgRW5kcG9pbnQoYGh0dHA6Ly8ke2hvc3R9OiR7cG9ydH1gKSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG59XG5cbmNvbnN0IGhlbGxvOiBIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnksIGNvbnRleHQ6IENvbnRleHQpID0+IHtcbiAgY29uc3QgZHluYW1vREIgPSBzZXR1cER5bmFtb0RCKCk7XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LkRiVGFibGVOYW1lIHx8ICcnLFxuICAgIEl0ZW06IHtcbiAgICAgIGlkOiB2NCgpLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBuYW1lOiAndGVzdG5hbWUnLFxuICAgIH0sXG4gIH07XG4gIGNvbnNvbGUubG9nKCd3cml0aW5nIGRhdGEgdG8gZGInKTtcblxuICBhd2FpdCBkeW5hbW9EQi5wdXQoZGF0YSkucHJvbWlzZSgpO1xuXG4gIGNvbnNvbGUubG9nKCdyZWFkaW5nIGZyb20gZGInKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHluYW1vREJcbiAgICAuc2Nhbih7XG4gICAgICBUYWJsZU5hbWU6ICdwcm9qZWN0cycsXG4gICAgfSlcbiAgICAucHJvbWlzZSgpO1xuICBjb25zdCByZXNwb25zZTogSGVsbG9SZXNwb25zZSA9IHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzdWx0KSxcbiAgfTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBoZWxsbyB9O1xuIl19
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=handler.js.map