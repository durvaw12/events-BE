let bookingModel = require("../models/bookingModel");
let addController = (req, res) => { 
    bookingModel.addBooking(req.body, res);  //frontend sends obj which is called req.body in backend and res is used to send response to frontend
}

//req (Request object)
//Represents the incoming HTTP request from the client (frontend, Postman, etc.).
//Contains all the information the client sent:
//req.body → data sent in the request body (e.g., { name: "Durva" }).
//req.params → route parameters (e.g., /update/123 → req.params.id = 123).

//res (Response object)
//Represents the outgoing HTTP response that the server sends back to the client.
//Contains methods to send data back:
//res.send("Hello") → sends plain text.
//res.json({ success: true }) → sends JSON data.
//res.status(404).send("Not Found") → sets status code and sends message.

let getAllBooking = (req, res) => {
    bookingModel.getAllBooking(res); // get means to show all bookings. The model fetches all bookings from the database and sends them back via res.
}

let updateBooking = (req, res) => {
    bookingModel.updateBooking(req.params.id, req.body, res); //req.params.id is the unique identifier for the booking to update (e.g., /update/123 → req.params.id = 123), req.body contains the new data, and res is used to send the response back to the client.
}

let deleteBooking = (req, res) => {
    bookingModel.deleteBooking(req.params.id, res); //req.params.id is the unique identifier for the booking to delete (e.g., /delete/123 → req.params.id = 123), and res is used to send the response back to the client.
}

module.exports = { addController, getAllBooking, updateBooking, deleteBooking };