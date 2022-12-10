const express = require("express");
const app = express();
const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/tutor.js"));
app.use(require("./routes/client.js"));

// get driver connection
const dbo = require("./db/conn.js");

app.listen(port, () => {
  // perform a database connection when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);

  // });
  console.log(`Server is running on PORT: ${port}`);
});