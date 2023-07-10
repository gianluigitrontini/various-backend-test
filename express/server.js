var express = require("express");
var userRouter = require("./routes/user");
var bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`);
});

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});

// USERS
app.use("/api/users", userRouter);

// Response for unlisted endpoints
app.use((req, res) => {
  res.status(404);
});
