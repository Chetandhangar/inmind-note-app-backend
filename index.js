const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')

const authRouter = require('./routers/auth.router.js')

const dbConnection = require('./db/db.js')
dbConnection();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({success : true , 
  message : "Welcome to inMind - Notes"})
});

app.use('/api' , authRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});