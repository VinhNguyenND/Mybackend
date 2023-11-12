const mongoose=require("mongoose");
const schema = mongoose.Schema;

const brandSchema = schema({
    name: String,
    Address: String,
    PhoneNumber:String,
})
module.exports=mongoose.model("brands",brandSchema);