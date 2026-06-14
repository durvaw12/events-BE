let bookingModel = require("../models/bookingModel");
let addController = (req, res) => {
    bookingModel.addBooking(req.body, res);  //frontend sends obj which is called req.body in backend and res is used to send response to frontend
}

let getAllBooking = (req, res) => {
    bookingModel.getAllBooking(res);
}

let updateBooking = (req, res) => {
    bookingModel.updateBooking(req.params.id, req.body, res);
}

let deleteBooking = (req, res) => {
    bookingModel.deleteBooking(req.params.id, res);
}

module.exports = { addController, getAllBooking, updateBooking, deleteBooking };