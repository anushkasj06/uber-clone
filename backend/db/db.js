const mongoose = require('mongoose');

function connectToDb() {
    console.log("Trying to connect to the database...");
    console.log("Database URL:", process.env.DB_CONNECT);
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("✅ Connected to DB");
    })
    .catch((err) => {
        console.error("❌ Error connecting to DB:", err.message);
    });
}

module.exports = connectToDb;
