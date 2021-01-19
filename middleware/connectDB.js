const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@rohan.7ulch.mongodb.net/rohan?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};
module.exports = connectDB;
