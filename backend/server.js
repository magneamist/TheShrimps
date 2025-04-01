const express = require("express");
const { syncDB } = require("./models/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({}))

const startServer = async () => {
    await syncDB();
    app.listen(3000, () => console.log("Server running on http://localhost:3000 🚀"));
};

startServer();
