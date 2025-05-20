// controllers/jobController.js
const Jobs = require('../modals/jobModal');

const searchJobs = async (req, res) => {
  try {
    const { minSalary, maxSalary, location, jobType, jobTitle } = req.query;

    // crating an dynamic querys
    const query = {};

    // regx for partial matching
    if (minSalary) {
      query.minSalary = { $gte: parseInt(minSalary) };
    }

    if (maxSalary) {
      query.maxSalary = { $lte: parseInt(maxSalary) };
    }

    if (location) {
      query.location = { $regex: new RegExp("^" +location, 'i') };
    }

    if (jobType) {
      query.jobType =  {$regex: new RegExp( jobType, 'i') };
    }


    if (jobTitle) {
      query.jobTitle = { $regex: new RegExp( jobTitle, 'i') };
    }

    const jobs = await Jobs.find(query);
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Search Error:", error);
    res.status(500).json({ message: 'Server error while searching jobs' });
  }
};

module.exports = searchJobs