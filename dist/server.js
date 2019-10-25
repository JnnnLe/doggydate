"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _user = _interopRequireDefault(require("./resources/user/user.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let port = 3000;
const app = (0, _express.default)();
exports.app = app;
app.disable('x-powered-by');
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev')); // initiate the start of the userRouters

app.use('/api/user', _user.default); // add a new user

app.post('/api/user', _user.default); // get all users

app.get('/api/user', _user.default);

const start = () => {
  app.listen(port, () => {
    console.log('doggydate server on port 3000');
  });
};

exports.start = start;