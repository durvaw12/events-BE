const express = require("express");  //Loads the Express framework. scnce we are going to use a feature of express called router, we need to load express first.
const bookingController = require("../controllers/bookingController"); //1st dot to go out of current folder, 2nd dot means we are in parent folder where we need to go to controllers folder and then we need to load bookingController.js file.
let router = express.Router(); //creates a router object. think of it as a mini express application that only handles routes.

//The router (express.Router()) is like the watchman at the gate.
//His job: check which door (URL path) the visitor is knocking on.
//Example: If someone knocks on /add, the watchman says: “Okay, this request is for the manager who handles adding.”

router.post("/add", bookingController.addController); //Here, the watchman sees a POST request to /add and forwards it to the right manager (addController).
router.get("/get", bookingController.getAllBooking);
router.put("/update/:id", bookingController.updateBooking);   // update karay sathi id varparto with colon it should be unique
router.delete("/delete/:id", bookingController.deleteBooking);  // delete karay sathi id varparto with colon it should be unique



module.exports = router; //Makes this router available to other files.
