const express = require("express");
const bookingController = require("../controllers/bookingController");
let router = express.Router();
router.post("/add", bookingController.addController);
router.get("/get", bookingController.getAllBooking);
router.put("/update/:id", bookingController.updateBooking);   // update karay sathi id varparto with colon it should be unique
router.delete("/delete/:id", bookingController.deleteBooking);  // delete karay sathi id varparto with colon it should be unique



module.exports = router;
