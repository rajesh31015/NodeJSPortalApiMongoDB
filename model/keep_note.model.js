const mongo = require("mongoose");
const { schema } = require("./punchTime.model");

const kepp_noteSchema = new mongo.Schema({
    uid : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    priority_level : {
        type : Number,  // 1=>lowest, 2->low , 3-> high, 4=> highest
        default : 4
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

const keepNote = mongo.model("Keep_note",kepp_noteSchema);

module.exports = keepNote;