const { application } = require("express")
const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
  postedOn : {type : "date" , default : new Date() } ,
  jobTitle: { type: 'string', required: true },
  companyName: { type: 'string', required: true },
  location: { type: 'string', required: true },
  jobType: { type: 'string', required: true,  },
  minSalary: { type: 'number', required: true },
  maxSalary: { type: 'number', required: true },
  applicationDeadLine :{type: 'date', required: true },
  descriptions: {type: 'string' , required: true},
})

const JobModal =  mongoose.model("jobs" , jobSchema)

module.exports =  JobModal ;

   