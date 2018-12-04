const{MongoClient, OnjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(err, client) => {
    if (err){
        console.log('Unable to connect to MongoDB server ', err);
    }
    console.log('Connected tp MongoDB server');
    const db = client.db('TodoApp');

    

    // db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({location:'Toronto'}).toArray().then((docs) =>{
        //console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //client.close();
})