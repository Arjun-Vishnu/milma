const mongoose =require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/product", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

 let db = mongoose.connection;
 module.exports = db; 