const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.REACT_APP_MONGO_URL)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((e)=>{
    console.log("Mongo Connection Failed");
});

const newSchema = new mongoose.Schema({
    userid: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

const users = mongoose.model("users", newSchema);
module.exports = users;