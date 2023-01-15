// Third party technology imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// App initialization
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log(`Gift Ideas backend is up on port ::: ${PORT}`);
});