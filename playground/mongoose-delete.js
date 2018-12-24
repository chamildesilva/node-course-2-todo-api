const{ObjectID} = require('mongodb');

const{mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todos');
const{User} = require('../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5c204cf266d510d1dca86e15').then((todo)=>{
    console.log(todo);
})
