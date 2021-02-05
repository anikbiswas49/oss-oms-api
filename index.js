require("dotenv").config();
const express = require("express");
const http = require("http");
const helmet = require('helmet');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const database = require("./config/database");

const port = process.env.port || 3000;


const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));
app.use(fileUpload({
    limits: {fileSize: 50 * 1024 * 1024},
}));

app.use(require("./routes/productRoute"));

app.use((req, res, next) => {
    res.status(404).json({success: false, message: "Route Not Found"});
    next()
});


app.use((error, req, res, next) => {

    if (error.code) {
        res.status(error.code);
        return res.json({success: false, message: error.message})
    }
    res.status(500).json({success: false, message: "Internal server Error"});
    next()

});

const server = http.createServer(app);

server.listen(port, async () => {
    console.log(`server is running on port ${port}`);
   await database.connectdb()
});