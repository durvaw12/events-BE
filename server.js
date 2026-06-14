require("dotenv").config();  //to use .env file
let express = require("express");
let cors = require("cors");
let bookingRoutes = require("./routes/bookingRoutes");

let app = express();   //to start server
app.use(cors());      
app.use(express.json());  //json to javaScript object
app.use("/", bookingRoutes);  //to use the routes

let PORT = process.env.PORT || 9000;  //to use port from .env file or if it is not available then use 9000
app.listen(PORT, () => {
    console.log("Server running on port" + PORT);
});


//server--> Routes-->Controllers-->Models
//client-->watchman house (bookingRoutes.js) then asks the watchman (router) --> manager house (bookingController.js) then asks the manager (addController) --> majdoor house (bookingModel.js) then calls the majdoor (add).