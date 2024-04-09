const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leaveSchema = new Schema({
    uid : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subject : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    status : {
        type : Number,  // 0=> deleted, 1=>no action, 2=> approved, 3=>rejected
        default : 1
    },
    leave_date : {
        type : Date,
        required : true
    },
    leave_type : {
        type : Number, // 1=>short, 2=>half, 3=>full
        default : 1
    },
    approved_by : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at : {
        type : Date,
        default : Date.now
    },
    deleted_at : {
        type : Date,
        default : Date.now
    }
});

const leave = mongoose.model("Leave",leaveSchema);

module.exports = leave;