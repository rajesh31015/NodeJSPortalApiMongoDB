const mongo = require("mongoose");
const {Schema} = mongo;

const punchTimeSchema = new Schema({
    uid : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    punch_in : {
        type : Date,
        required : true
    },
    punch_out : {
        type : Date
    },
    total_time : {
        type : String
    },
    punch_in_ip_address : {
        type : String,
        required : true
    },
    punch_out_ip_address : {
        type : String
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

const punchTime = mongo.model("Punch_time",punchTimeSchema);

module.exports = punchTime;