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
app.use((0, _morgan.default)('dev'));
app.use('/api/user', _user.default);
app.get('/api', (req, res) => {
  res.json({
    message: "Jennifer Lê Jowett's server is running!"
  });
});
app.post('/api', (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

const start = () => {
  app.listen(port, () => {
    console.log('doggydate server on port 3000');
  });
};

exports.start = start;