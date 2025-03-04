import mongoose from "mongoose";
export default function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDb Connected Successfully");
        });

        connection.on("error", (err) => {
            console.log("MongoDb Connection error. Please make sure MongoDb is running " + err);
            process.exit();
        });
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
    }
}
