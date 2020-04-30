const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = express.Router();


const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const Todo = require('./model/todo');
app.use(cors());


const mongoURI = 'mongodb://localhost/task1';
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: false});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Congratulatiions! Your mongo db connection is successful');
});

//routes
routes.route('/').get(function(req, res){
  Todo.find(function(err, todos){
    if(err){
      console.log(err);
    }
    else{
      res.json(todos);
    }
  });
});


app.use('/todos', routes);

//PORT
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log('Listening to port' + PORT);
});