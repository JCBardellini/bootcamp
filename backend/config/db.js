const mongoose = require("mongoose");

let connectionString = process.env.MONGO_URL;

// console.log(connectionString);

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// log when connected
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");
});