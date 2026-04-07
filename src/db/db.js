const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    require('node:dns').promises.setServers(['1.1.1.1', '8.8.8.8']);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
}

module.exports = connectDB;