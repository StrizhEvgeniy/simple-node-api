const express = require("express");
const routes = require("./routes");
const cors = require("cors");

// App
const app = express();

// Set port
const port = process.env.PORT || "8080";
app.set("port", port);
app.use(cors());
app.use("/", routes);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
