require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const connectToDb = require("./config/connectToMongo")
const postJob = require("./routes/postJobRoute")
const search = require("./routes/searchRoute")
const allJobs = require("./routes/getAllJobsRoutes")

const PORT = process.env.PORT || 5000;
connectToDb()

app.use(bodyParser.json()); // Parses JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(cors({
    origin : ["https://cybermindclient.vercel.app", "http://localhost:5173"],
    credentials: true,
}));



app.use("/api" , allJobs)
app.use("/api" , postJob)
app.use("/api" , search)

app.listen(PORT, ()=>{
    console.log("server is listing on port 5000")
})