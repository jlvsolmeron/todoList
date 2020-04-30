const mongoose = require('mongoose');
const Todo = require('./model/todo');
const key = require('./keys');
mongoose.connect(key.mongoURI, {useNewUrlParser: true, useUnifiedTopology: false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Congratulatiions! Your mongo db connection is successful');
});