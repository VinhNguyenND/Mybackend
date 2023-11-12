const mongoose=require("mongoose");
const schema = mongoose.Schema;

const User = schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
        unique: true,
    },
    PassWord: {
        type: String,
    }
})

module.exports=mongoose.model("Users",User);