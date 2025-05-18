const express = require("express")
const router = express.Router()
const postJobcontroller =  require("../controllers/postJob")

router.post("/postjob" , postJobcontroller);

module.exports = router ; 