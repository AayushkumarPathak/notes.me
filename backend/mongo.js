const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Aayush:Ranchilpu2022@cluster0.zgbk6yj.mongodb.net/notesme")
.then(()=>{
    console.log("Connected to Database");
})
.catch((e)=>{
    console.log("Connection Failed");
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