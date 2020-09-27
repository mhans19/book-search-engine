// DEPENDENCIES
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
// DEFINE CONNECTION
//console.log(process.env.DB_NAME);
const MONGODB_URI = `mongodb+srv://mhans19:${process.env.DB_PASS}@cluster0.bhbgx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&replicaSet=primary`
// MONGOOSE CONNECTION
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
// EXORTS
module.exports = mongoose.connection;
