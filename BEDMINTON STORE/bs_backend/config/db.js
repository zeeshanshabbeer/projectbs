const mongoose=require ("mongoose");

const connectDb =async () =>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`mongoose connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1);
        
    }
}
module.exports=connectDb;