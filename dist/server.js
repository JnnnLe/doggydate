"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _user = _interopRequireDefault(require("./resources/user/user.router"));

var _pet = _interopRequireDefault(require("./resources/pet/pet.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

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
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/api?retryWrites=true&w=majority`;

_mongoose.default.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}); // initiate the start of the router


app.use('/api/auth', _user.default); // app.use('/api/user', petRouter) 

app.post('/api/auth', _user.default); // add a new user

app.get('/api/auth', _user.default); // get all users
// app.post('/api/user', petRouter) // Add a new pet
// app.get('/api/user', petRouter) // Get all pets in db

const start = () => {
  app.listen(port, () => {
    console.log('doggydate server on port 3000');
  });
};

exports.start = start;