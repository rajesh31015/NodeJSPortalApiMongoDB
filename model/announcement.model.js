const mongo = require("mongoose");

const announcementSchema = new mongo.Schema({
    uid : {
        type : mongo.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    title : {
        type : String,
        required : true,
    },
    description : String,
    status : {
        type : Number,
        default : 1   // 0=> disabled , 1=> enabled
    },
    color : {
        type : String,
        default : "#256574"
    },
    department : {
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

const annoucement = mongo.model("Announcement",announcementSchema);

module.exports = annoucement;