const express = require("express")
const router = express.Router()
const allJobcontroller =  require("../controllers/getJobs")

router.get("/jobs" ,  allJobcontroller);

module.exports = router ; 