const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const cartitemschema = new mongoose.Schema({
    itemid : {
        type :mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'cart.itemmodel'
    },
    itemmodel : {
        type : String,
        required : true,
        enum : [
            'Beverage', 'Biryani', 'Bread', 'Dairy', 'Dryfruit', 
            'Flour', 'Frozen', 'Oil', 'Papad', 'Pickle', 
            'Pooja', 'Spice', 'Pulse', 'Rice', 'Rte', 'Snack'
          ]
    },
    quantity : {
        type : Number,
        required : true,
        min : 1
    }
});
const userschema = new mongoose.Schema({
    email : {
        type : String,
        trim : true,
        required : true
    },
    googleId: String ,
    facebookId : String,
    profileImage: String,
    cart : {
        type : [cartitemschema],
        default : []
    }
});
userschema.plugin(plm);
let User = mongoose.model("User",userschema);
module.exports = User;