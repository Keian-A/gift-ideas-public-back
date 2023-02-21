// Third party technology imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/routes");
require("dotenv").config();

// App initialization
const PORT = process.env.PORT;
const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());

// ENV vars
const MONGODB_URI = process.env.MONGODB_URI;

// Database connection
mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Database confirmation
const db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected!');
});

app.post('/newUser', router.signup);
app.post('/login', router.login);

app.listen(PORT, () => {
    console.log(`Gift Ideas backend is up on port ::: ${PORT}`);
});