let { MongoClient, ObjectId } = require("mongodb");   //mongoClient is a class which is used to connect with mongodb and ObjectId is a special type used for MongoDB document IDs (like _id fields).
//Example: when you want to update or delete a booking by ID, you must wrap it in new ObjectId(id).
let url = process.env.MONGO_URL;  
let addBooking = (obj, res) => {  //obj is the data sent by frontend , add is majdoor ch name
    // Implementation for adding a booking
   // res.send(""); //it will send response to frontend saying booking is done
     let client = new MongoClient(url);
   client.connect()
    let db = client.db("mern"); // it will create a database with name mern if it is not already created and if it is already created then it will connect to that database
    // let client = new MongoClient(url);  //client comes from MongoClient class which cmoes from mongodb package, it is used to connect with mongodb, url is the connection string which is stored in .env file, it contains username,password and cluster name, it is used to connect with mongodb atlas cloud database

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
    collec.find().toArray()  //find() → returns a cursor (pointer to results).  
//.toArray() → fetches all documents from that cursor and puts them into a normal JavaScript array.
//That array is then sent back to the frontend with res.send(result).


//Here, the cursor acts like a stream — you iterate through results one at a time. ....Here, .toArray() says: “Take the cursor and dump everything into a normal JavaScript array.”
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