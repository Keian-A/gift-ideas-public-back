// Third party technology imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { ServerApiVersion } = require('mongodb');
const router = require("./routes/routes");
require("dotenv").config();

// App initialization
const PORT = process.env.PORT;

// ENV vars
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());

// Database connection
mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Database confirmation
const db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected!');
});

app.post('/newUser', router.signup);
app.post('/login', router.login);
app.post('/createGroup', router.createGroup);

app.listen(PORT, () => {
    console.log(`Gift Ideas backend is up on port ::: ${PORT}`);
});