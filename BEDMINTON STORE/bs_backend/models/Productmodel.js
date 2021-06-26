
const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type: String,
    },
    image:{
        type:String,
        required:true
    },
    Brand:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    countinstock:{
        type:Number,
        required:true,
    },
})
const Product=mongoose.model("Product",productSchema);
module.exports=Product;