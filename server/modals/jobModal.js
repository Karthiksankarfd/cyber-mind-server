const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  postedOn : { type: String, default: "Just now" },
  salary : { type: String, required: true },
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  minSalary: { type: Number, required: true },
  maxSalary: { type: Number, required: true },
  applicationDeadLine: { type: Date },
  descriptions: { type: [String] },
  uplodedDescription: { type: String }
});

const JobModal = mongoose.model("jobs", jobSchema);
module.exports = JobModal;
