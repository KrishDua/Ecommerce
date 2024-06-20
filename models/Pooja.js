const mongoose = require("mongoose");
let productschema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true,
    },
    img :{
        type :String,
        trim : true,
        // default :
        // required : true
    },
    price : {
        type : mongoose.Schema.Types.Decimal128,
        // type : Number,
        // required : true
    },
    desc : {
        type : String,
        trim : true
    },
    reviews : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Review'
        }
    ]
})
let Pooja = mongoose.model("Pooja",productschema);
module.exports = Pooja;