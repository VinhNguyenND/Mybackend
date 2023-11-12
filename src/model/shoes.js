const mongoose=require("mongoose");
const schema = mongoose.Schema;

const shoesSchema = schema({
    name: {
      type:String,
      unique:true,
    },
    brand: String,
    description:String,
    price:String,
    image: String,
    stock:String,
})


module.exports=mongoose.model("Shoes",shoesSchema);