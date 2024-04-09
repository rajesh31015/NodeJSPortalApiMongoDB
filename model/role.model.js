const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    uid : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
        }
    ]
    ,
    name : {
        type : String,
        required : true
    },
    created_at : {
        type : Date,
        default : Date.now
    },
    updated_at : {
        type : Date,
        default : Date.now
    }
});

const role = mongoose.model('Role',roleSchema);

module.exports = role;
