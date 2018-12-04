const MongoClinet = require('mongodb').MongoClient;
const mongodb = require('mongodb');
//const {MongoClinet, ObjectID} = require('mongodb');

MongoClinet.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
        console.log('Unable to connect to MongoDB', err);
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    
    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
    //     console.log(result);
    // });

    //findOneDeleteMany
    db.collection('Todos').findOneAndDelete({_id: new mongodb.ObjectID("5c049405c1700931fc6291db")}).then((result) =>{
        console.log(JSON.stringify(result), undefined, 2);
    })


})
