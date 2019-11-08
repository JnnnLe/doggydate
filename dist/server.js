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

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _jwksRsa = _interopRequireDefault(require("jwks-rsa"));

var _user = _interopRequireDefault(require("./resources/user/user.router"));

var _pet = _interopRequireDefault(require("./resources/pet/pet.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

let port = 3001;
const app = (0, _express.default)(); // Set up Auth0 configuration

exports.app = app;
const authConfig = {
  domain: process.env.DOMAIN,
  audience: process.env.API_IDENTIFIER
}; // console.log('HERE:',authConfig.domain)
// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN

const checkJwt = (0, _expressJwt.default)({
  secret: _jwksRsa.default.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
}); // Define an endpoint that must be called with an access token

app.get("/api/external", checkJwt, (req, res) => {
  console.log('$$$$$$$$$$$$', req);
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});
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


app.use('/api/auth', _user.default);
app.use('/api/user', _pet.default);
app.post('/api/auth', _user.default); // add a new user

app.get('/api/auth', _user.default); // get all users

app.post('/api/user', _pet.default); // Add a new pet

app.get('/api/user', _pet.default); // Get all pets in db

const start = () => {
  app.listen(port, () => {
    console.log('doggydate Express server on port 3001');
  });
};

exports.start = start;