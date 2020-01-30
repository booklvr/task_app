/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/models/task.js":
/*!*******************************!*\
  !*** ./src/js/models/task.js ***!
  \*******************************/
/*! exports provided: connectDb, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDb\", function() { return connectDb; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connectDb = () => {\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DATABASE_URL, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true\n  });\n};\n\nconst taskSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  task: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  description: {\n    type: String,\n    required: true\n  }\n});\nconst Task = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Task', taskSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n//# sourceURL=webpack:///./src/js/models/task.js?");

/***/ }),

/***/ "./src/server/routes/task.js":
/*!***********************************!*\
  !*** ./src/server/routes/task.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_models_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/models/task */ \"./src/js/models/task.js\");\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])(); // Get all tasks\n\nrouter.get('/', async (req, res) => {\n  console.log();\n  const tasks = await _js_models_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n  res.send(tasks);\n});\nrouter.post('/', async (req, res) => {\n  const task = await _js_models_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n    task: req.body.task,\n    description: req.body.description\n  });\n  return res.send(task);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/task.js?");

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webpack.config.js */ \"./webpack.config.js\");\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_models_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/models/task */ \"./src/js/models/task.js\");\n/* harmony import */ var _routes_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/task */ \"./src/server/routes/task.js\");\n\n\n\n\n\n //import models and routes\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nconst DIST_DIR = __dirname;\nconst HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html');\nconst compiler = webpack__WEBPACK_IMPORTED_MODULE_4___default()(_webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default.a);\napp.use(__webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n  noInfo: true,\n  publicPath: _webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default.a.output.publicPath\n}));\napp.use(__webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\")(compiler));\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(__dirname));\napp.get('/', (req, res) => {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname + '/index.html'));\n}); // app.use(express.json);\n// ROUTES\n\napp.use('/task', _routes_task__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nconst PORT = process.env.PORT || 3000;\nconst eraseDataBaseOnSync = true;\nObject(_js_models_task__WEBPACK_IMPORTED_MODULE_6__[\"connectDb\"])().then(async () => {\n  if (eraseDataBaseOnSync) {\n    await Promise.all([_js_models_task__WEBPACK_IMPORTED_MODULE_6__[\"default\"].deleteMany({})]);\n    createTask();\n  }\n\n  app.listen(PORT, () => {\n    console.log(`Example app listenning on port ${PORT}`);\n  });\n});\n\nconst createTask = async () => {\n  console.log('YOU ARE ADDING A TASK');\n  const task1 = new _js_models_task__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    task: 'learn to code',\n    description: 'finish this website'\n  });\n  await task1.save();\n};\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nconst HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    app: ['@babel/polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: 'source-map',\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader',\n      query: {\n        presets: ['@babel/preset-env']\n      }\n    }, {\n      test: /\\.html$/,\n      loader: \"html-loader\"\n    }, {\n      test: /\\.(sc|c)ss$/,\n      use: [MiniCssExtractPlugin.loader, // 'style-loader',\n      'css-loader', 'postcss-loader', 'sass-loader']\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({\n    title: 'Task App',\n    template: './src/html/index.html',\n    excludeChunks: ['server']\n  }), new MiniCssExtractPlugin({\n    filename: 'style.css',\n    chunkFilename: '[id].css'\n  })]\n};\n\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv/config\");\n\n//# sourceURL=webpack:///external_%22dotenv/config%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });