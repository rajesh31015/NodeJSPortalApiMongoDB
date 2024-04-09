const mongo = require("mongoose");
const { boolean } = require("webidl-conversions");
const { Schema } = mongo;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    company_email : {
        type : String,
        unique : true,
        required : true,
    },
    personal_email : {
        type : String,
        unique : true,
        required : true,
    },
    address : {
        type : String
    },
    city : {
        type : String
    },
    state : {
        String
    },
    pincode : {
        type : String,
    },
    country : {
        type : String
    },
    age : {
        type : Number
    },
    mobile_no : {
        type : String
    },
    another_mobile_no : {
        type : String
    },
    mother_mobile_no : {
        type : String
    },
    father_mobile_no : {
        type : String
    },
    profile_image : {
        type : String
    },
    aadhar_number : {
        type : String
    },
    aadhar_card_front_image : {
        type : String,
    },
    aadhar_card_back_image : {
        type : String,
    },
    driver_license_image : {
        type : String
    },
    pancard_image : {
        type : String
    },
    pancard_number : {
        type : String
    },
    passport_front_image : {
        type : String
    },
    passport_back_image : {
        type : String
    },
    is_mobile_verified : {
        type : Boolean
    },
    is_email_varified : {
        type : Boolean
    },
    password : {
        type : String
    },
    is_experienced : {
        type : Boolean,
        default : false
    },
    is_fresher : {
        type : Boolean,
        default : true
    },
    experience : {
        type : Number
    },
    previous_company_name : {
        type : String,
    },
    previous_salary : {
        type : String
    },
    qualification : {
        type : String
    },
    expected_salary : {
        type : Number
    },
    current_salary : {
        type : Number
    },
    date_of_birth : {
        type : Date
    },
    date_of_joining : {
        type : Date
    },
    department : {
        type : String
    },
    is_active : {
        type : String
    },
    role : {
        type : String
    },
    is_account_closed : {
        type : Boolean,
        default : false
    },
    security_amount : {
        type : Number
    },
    employee_code : {
        type : String
    },
    specialization : {
        type : String
    },
    designation : {
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

const user = mongo.model("User",userSchema);

module.exports = user;