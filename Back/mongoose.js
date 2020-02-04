const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Art_Wear";

const connectionToMongoDB =  () => {
  try {
     mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("Mongodb  is connected ....... ok ");
  } catch (error) {
    console.log("there is an error \n", error.message);
    process.exit(1);
  }
};

module.exports = connectionToMongoDB;
