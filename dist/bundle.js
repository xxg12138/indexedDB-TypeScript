/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/indexedDBTs/addIndexedDB.ts":
/*!*****************************************!*\
  !*** ./src/indexedDBTs/addIndexedDB.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// indexedDB插入数据操作\n// // 插入数据\n// // 数据库对象   表名   数据\nvar addData = function (db, storeName, data) {\n    var transaction = db.transaction([storeName], 'readwrite');\n    var objectStore = transaction.objectStore(storeName);\n    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {\n        var item = data_1[_i];\n        objectStore.add(item);\n    }\n    transaction.oncomplete = function () {\n        console.log('数据写入成功');\n    };\n    transaction.onerror = function (event) {\n        console.log('数据写入失败');\n    };\n};\nexports[\"default\"] = addData;\n\n\n//# sourceURL=webpack://indexedDB/./src/indexedDBTs/addIndexedDB.ts?");

/***/ }),

/***/ "./src/indexedDBTs/createIndexedDB.ts":
/*!********************************************!*\
  !*** ./src/indexedDBTs/createIndexedDB.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// // 创建数据库  表\n// // 数据库名  版本\nvar openDB = function (name, version) {\n    if (version === void 0) { version = 1; }\n    return __awaiter(void 0, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            // 检查当前环境是否支持 IndexedDB API，如果支持，\n            // 就可以使用 indexedDB 对象来进行 IndexedDB 相关的操作，\n            // 比如打开数据库、创建对象仓库等。\n            return [2 /*return*/, new Promise(function (resolve, reject) {\n                    var indexedDB = window.indexedDB;\n                    if (!indexedDB) {\n                        reject('你的浏览器不支持 IndexedDB');\n                    }\n                    // 打开数据库，若没有则会创建\n                    var request = indexedDB.open(name, version);\n                    // 数据库打开成功回调\n                    request.onsuccess = function (event) {\n                        var db = event.target.result; // 数据库对象\n                        console.log('数据库打开成功');\n                        resolve(db);\n                    };\n                    // 数据库打开失败回调\n                    request.onerror = function (event) {\n                        console.log('数据库打开报错');\n                        reject('数据库打开失败');\n                    };\n                    // 数据库有更新时候的回调\n                    request.onupgradeneeded = function (event) {\n                        // 数据库创建或升级的时候会触发\n                        console.log('数据库创建');\n                        var db = event.target.result; // 数据库对象\n                        // 创建存储库\n                        var objectStore = db.createObjectStore('user', {\n                            keyPath: 'time' // 主键\n                            // autoIncrement: true // 实现自增\n                        });\n                        // 创建索引，在后面查询数据的时候可以根据索引查\n                        objectStore.createIndex('time', 'time', { unique: true }); //unique唯一约束\n                        objectStore.createIndex('name', 'name', { unique: false });\n                        objectStore.createIndex('age', 'age', { unique: false });\n                    };\n                })];\n        });\n    });\n};\nexports[\"default\"] = openDB;\n\n\n//# sourceURL=webpack://indexedDB/./src/indexedDBTs/createIndexedDB.ts?");

/***/ }),

/***/ "./src/indexedDBTs/index.ts":
/*!**********************************!*\
  !*** ./src/indexedDBTs/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar addIndexedDB_1 = __importDefault(__webpack_require__(/*! ./addIndexedDB */ \"./src/indexedDBTs/addIndexedDB.ts\"));\nvar createIndexedDB_1 = __importDefault(__webpack_require__(/*! ./createIndexedDB */ \"./src/indexedDBTs/createIndexedDB.ts\"));\nvar addDataBtn = document.getElementById('add-data-btn');\naddDataBtn === null || addDataBtn === void 0 ? void 0 : addDataBtn.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {\n    var db, data, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, (0, createIndexedDB_1.default)('my-data', 1)];\n            case 1:\n                //   获取数据库\n                db = _a.sent();\n                data = [\n                    {\n                        time: new Date().getTime(),\n                        name: '小小怪',\n                        age: 25\n                    },\n                    {\n                        time: new Date().getTime() + 1,\n                        name: '大大怪',\n                        age: 45\n                    }\n                ];\n                //   插入数据\n                (0, addIndexedDB_1.default)(db, 'user', data);\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.log('插入失败');\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// node_modules\n// src----------------目录indexedDBTs--------------addIndexedDB.ts\n// .gitignore        |                            |         \n// package           |                            |-createIndexedDB.ts\n// pnpm - lock       index.html                   |\n// tsconfig                                       |-addIndexedDB.ts\n// webpack.config                                 |                  \n\n\n//# sourceURL=webpack://indexedDB/./src/indexedDBTs/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/indexedDBTs/index.ts");
/******/ 	
/******/ })()
;