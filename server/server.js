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
    origin : ["http://localhost:5173" , "https://cybermindclient.vercel.app/" , "https://cybermindclient-karthiksankarfds-projects.vercel.app/" ,"https://cyber-mind-server-1.onrender.com/"]
}))


app.use("/api" , allJobs)
app.use("/api" , postJob)
app.use("/api" , search)

app.listen(PORT, ()=>{
    console.log("server is listing on port 5000")
})