const express = require('express');
const mongoose = require('mongoose')


var userRoutes = require('./Routes/user');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://harshasagar1506:Iglulabs.com@cluster0.dqwzw16.mongodb.net/?retryWrites=true&w=majority')

const db= mongoose.connection;
db.on('connected',function(){
    console.log("Connected to Database");
})
mongoose.connection.on("error", err => {
    console.log("err", err)
  })
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
