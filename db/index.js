import mongoose from "mongoose";
import DB_NAME from "../constant";
const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log("MONGODB connection FAILED", error);
      process.exit(1);
    }
};
export default connectDB;