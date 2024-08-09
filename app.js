// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const axios = require("axios");

// Create an instance of Express
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "https://dev-membership.poble.com.au",
      "https://dev-member.ecnesoft.com",
    ],
    credentials: true,
  })
);
app.use(cookieParser());

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Define a route
app.get("/", (req, res) => {
  console.log(req.cookies);

  res.send("Hello, World!");
});

// Start the server
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
