const mongoose =require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/mongooseCrud")

const CrudScheme= mongoose.Schema({
    name:String,
    age:Number,
    course:String,
})

const MongooseModel = mongoose.model("crud",CrudScheme )

module.exports={
    connection,
    MongooseModel
}