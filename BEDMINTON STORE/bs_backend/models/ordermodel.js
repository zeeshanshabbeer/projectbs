const mongoose=require ("mongoose");

const orderSchema=mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    OrderItem:[
        {
            name:{
                type: String,
                required:true,
            },
            qyt:{
                type: Number,
                required:true,
            },
            image:{
                type: String,
                required:true,
            },
            price:{
                type: Number,
                required:true,
            },
            Product:{
                type: mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product",
            },
        }
    ],
    shippingAddress:{
        address:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        country:{
            type:String,
            required:true,
        }
    },
    payment:{
        type:String,
        required:true,
    },
    paymentResult:{
        id:{
            type:String
        },
        update_time:{type:String},
    },
 totalprice:{
     type:Number,
     required:true,
     default:false,
 },
 isdelivered:{
     type:Boolean,
     required:true,
     default:false,
 },
})

const Order=mongoose.model("Order",orderSchema);
module.exports =Order;