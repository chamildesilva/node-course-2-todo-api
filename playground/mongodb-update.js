const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';


MongoClient.connect(url,(err, client) =>{
    if(err){
      console.log('Unable to Connect to MongoDB server');
    }
    console.log('Cpnnected to MongoDB server');

    const db = client.db(dbName);

    //find and update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c06a0a616daa01b20e4b459")
    // },{
    //     $set: {
    //         completed:true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(JSON.stringify(result), undefined, 2);
    // })
    
    //find and update with increment
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c05f20cf2ded11f57114a53")
    },{
        $set: {name: "Mahinda"},
        $inc: {age:+1}
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(JSON.stringify(result), undefined, 2);
    })
  
   

    // db.close;
});