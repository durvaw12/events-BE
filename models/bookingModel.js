let { MongoClient, ObjectId } = require("mongodb");
let url = process.env.MONGO_URL;  
let addBooking = (obj, res) => {  //obj is the data sent by frontend , add is majdoor ch name
    // Implementation for adding a booking
   // res.send(""); //it will send response to frontend saying booking is done
     let client = new MongoClient(url);
   client.connect()
    let db = client.db("mern"); // it will create a database with name mern if it is not already created and if it is already created then it will connect to that database
    // let client = new MongoClient(url);  //client comes from MonfoClient class

    let collec = db.collection("events"); //instead of events we can put anything, it will create a collection with that name if it is not already created and if it is already created then it will connect to that collection 

    collec.insertOne(obj)       //entry inside collection 
    .then((result) => res.send(result))
    .catch((err) => res.send(err))
    .finally(()=> client.close());

}

let getAllBooking=(res)=>
{
    let client = new MongoClient(url);
    client.connect()
    let db = client.db("mern")
    let collec= db.collection("events");
    collec.find().toArray()

    .then ((result)=> res.send(result))
    .catch ((err)=> res.send(err))  
    .finally(()=> client.close());
}

let updateBooking = (id, data, res)=>
{
   let client = new MongoClient(url);
    client.connect()
    let db = client.db("mern")
    let collec= db.collection("events");
    collec.updateOne({_id: new ObjectId(id)}, {$set: data})  // id update karay sathi pahile id milavi lagel tar new ObjectId vaparto and update karay sathi $set vaparto

    .then ((result)=> res.send(result))
    .catch ((err)=> res.send(err))  
    .finally(()=> client.close()); 
}

let deleteBooking = (id, res)=>{
    let client = new MongoClient(url);
    client.connect()
    let db = client.db("mern")
    let collec= db.collection("events");
    collec.deleteOne({_id: new ObjectId(id)})  

    .then ((result)=> res.send(result))
    .catch ((err)=> res.send(err))  
    .finally(()=> client.close()); 
}



module.exports = { addBooking, getAllBooking, updateBooking, deleteBooking };


//for code to connect with mongodb we have client, we need db name and collection name, in mysql we have tables in mongodb we have collection