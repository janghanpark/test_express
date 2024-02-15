// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

// Create an instance of Express
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Define a route
app.get("/", (req, res) => {
  console.log("hello");
  res.send("Hello, World!");
});

app.post("/login", async (req, res) => {
  console.log("Login request");
  console.log(req.body);

  const { code } = req.body; // Authorization grant code received from Apple

  try {
    const { data } = await axios.post(
      "https://appleid.apple.com/auth/token",
      {
        grant_type: "authorization_code",
        code,
        client_id: "poble.membership.test",
        client_secret:
          "eyJhbGciOiJFUzI1NiIsImtpZCI6Ik5TODhSTkJEN1UifQ.eyJhdWQiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiaXNzIjoiOE4yM1AzNDZGRiIsImlhdCI6MTcwNzk3MTY2MywiZXhwIjoxNzIzNTIzNjY0LCJzdWIiOiJwb2JsZS5tZW1iZXJzaGlwLnRlc3QifQ.XvaszVaex19_tG3P3UYQ4n8aZgGCUhIoPakc5TOVFdaGKkXZAoVCgmbjFlqFOSXI_EwEHQD0STdVhxdgz4t-8g",
        redirect_uri: "https://test-express-zaer.onrender.com",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

// Start the server
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
