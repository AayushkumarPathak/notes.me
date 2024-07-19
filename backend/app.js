const express = require("express");
const users = require("./mongo");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", cors(), (req, res) => {
  res.send("Hello user");
});

app.listen(PORT, () => {
  console.log(`Port connected http://localhost:${PORT}`);
});
