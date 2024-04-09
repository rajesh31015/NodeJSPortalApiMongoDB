const mongo = require("mongoose");

const { Schema } = mongo;

const ticketSchema = new Schema({
    uid : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    department_id : {
        type : Schema.Types.ObjectId,
        ref : 'Department',
        required: true
    },
    priority : {
        type : Number, // 1=>lowest, 2->low , 3-> high, 4=> highest
        default : 4
    },
    status : {
        type : Number,
        default : 0     // 0=> new , 1=> inprogress , 2=> resolved , 3=>closed
    },
    resolved_at : {
        type : Date,
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

const ticket = mongo.model("Ticket",ticketSchema);

module.exports = ticket;