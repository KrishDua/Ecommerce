const mongoose = require("mongoose");
const Review = require("./Review");
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
// for deletion of reviews with product (production practice)
// middleware which is used behind the scene for mongodb operations
// it also contains pre and post middlewares which are basically used 
// over the schema and before the model(js class)
// productschema.post('findOneAndDelete',async function(product){
//     if(product.reviews.length > 0){
//        await  Review.deleteMany({_id : {$in : product.reviews}})
//     }
// })
let Product = mongoose.model("Product",productschema);
module.exports = Product;