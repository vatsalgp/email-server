const app = require("express")();
require("./services/passport");
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5678;
console.log("Listening on port", PORT);
app.listen(PORT);