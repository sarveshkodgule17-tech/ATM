//const http = require("http");


//const server = http.createServer((req, res) => {
 //res.write("Hello Sarvesh! Node.js is running");
 //res.end();
//});


//server.listen(3000, () => {
 //console.log("Server running at http://localhost:3000");
//});

const express = require("express");
const mongoose = require("mongoose");
const accountRoute = require("./routes/accountRoute");

const app = express();

// ✅ Middleware first
app.use(express.json());

// ✅ Routes
app.use("/api/accounts", accountRoute);

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/atm")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// ✅ Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
