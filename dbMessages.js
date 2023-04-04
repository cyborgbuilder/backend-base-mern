import mongoose, { mongo } from "mongoose";

const dbSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String
})

export default mongoose.model('content', dbSchema);