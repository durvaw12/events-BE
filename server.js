require("dotenv").config();  //to use .env file
let express = require("express");  //express is a framework for node js, it is used to create web applications and APIs. It is built on top of the http module of node js, and it provides a lot of features that make it easier to create web applications and APIs. 
let cors = require("cors"); //It is a middleware that allows you to make requests from one domain to another domain. It is used to enable cross-origin resource sharing (CORS) in your application. By default, browsers block requests from one domain to another (e.g., frontend on http://localhost:3000 calling backend on http://localhost:9000).This middleware tells the browser: “It’s okay, allow requests from other domains.”
let bookingRoutes = require("./routes/bookingRoutes"); // ./ means current directory, so it will look for bookingRoutes.js file in the routes folder which is in the current directory. It is used to handle all the routes related to booking.

let app = express();   //to start server
app.use(cors());    //enable cors for all routes
app.use(express.json());  //json to javaScript object when frontend sends json say{ "name":"John", "event":"Birthday"} it will convert it req.body = { name: 'John', event: 'Birthday' } so to access the data in backend we can use req.body.name and req.body.event.
app.use("/", bookingRoutes);  // jab bhi "/" ke sath koi req ayegi to usko bookingRoutes ke andar bhej do,bookingRoutes ke andar jo bhi req ayegi usko handle karna hai, bookingRoutes ke andar humne get,post,put,delete sabhi req handle ki hai, 

let PORT = process.env.PORT || 9000;  //to use port from .env file or if it is not available then use 9000
app.listen(PORT, () => {
    console.log("Server running on port" + PORT);
});


//server--> Routes-->Controllers-->Models
//client-->watchman house (bookingRoutes.js) then asks the watchman (router) --> manager house (bookingController.js) then asks the manager (addController) --> majdoor house (bookingModel.js) then calls the majdoor (add).