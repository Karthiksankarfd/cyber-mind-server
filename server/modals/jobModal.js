
const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
  postedOn : {type : "date" , default : new Date() } ,
  jobTitle: { type: 'String', required: true },
  companyLogo : { type: 'String',  },
  companyName: { type: 'String', required: true },
  location: { type: 'String', required: true },
  salary : {type: 'String', required: true},
  jobType: { type: 'String', required: true,  },
  minSalary: { type: 'number', required: true },
  maxSalary: { type: 'number', required: true },
  applicationDeadLine :{type: 'date', required: true },
  descriptions: [{type: 'String'}],
  newJobDescription :{type: 'String'}
})

const JobModal =  mongoose.model("jobs" , jobSchema)

module.exports =  JobModal ;

   