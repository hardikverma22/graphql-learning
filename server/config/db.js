const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://hardikverma22:Hdk1234%40@cluster0.5txsqko.mongodb.net/?retryWrites=true&w=majority');

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;


