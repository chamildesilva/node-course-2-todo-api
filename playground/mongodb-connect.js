//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert new doc into User (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Bukka',
    //     age: 40,
    //     location: 'Toronto'
    // }, (err, result) => {
    //     if (err){
    //         console.log('Unable to insert User', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});