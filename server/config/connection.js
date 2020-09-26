// DEPENDENCIES
const mongoose = require('mongoose');
// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
// EXORTS
module.exports = mongoose.connection;
