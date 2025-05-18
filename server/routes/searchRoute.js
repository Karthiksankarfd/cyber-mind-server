const express = require("express")
const route = express.Router()
const searchcontroller =  require("../controllers/searchJob")

route.get("/search" , searchcontroller)

module.exports = route