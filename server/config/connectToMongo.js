const mongoose = require("mongoose")
require("dotenv").config()
const Jobs = require("../modals/jobModal")

const uri = `mongodb+srv://${encodeURIComponent(process.env.DB_USER_NAME)}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.CLUSTER_URL}/${encodeURIComponent(process.env.DB_NAME)}?retryWrites=true&w=majority&appName=Cluster-one`;
const connectToDb = async () =>{
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    }catch(e){
        console.log("ERROR CONNECTING TO DB" , e.message)
    }
}

module.exports = connectToDb