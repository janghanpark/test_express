// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of Express
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Data received successfully!");
});

// Start the server
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
