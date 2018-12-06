const{ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const{User} = require('./../server/models/user');

// var id ='5c098c9fdc028e339433a26dQQQQQQ';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// } 
// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo', todo); 
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));

var userId = '5c074836ab9262260c7337dd';

User.findById(userId).then((userData)=>{
    if(!userData){
        return console.log('User Id not found');
    }
    console.log('User by Id', userData);
}).catch((e) => console.log(e));
