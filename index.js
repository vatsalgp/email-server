const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
console.log("Listening in Port", PORT);
app.listen(PORT);