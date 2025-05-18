const Job = require("../modals/jobModal");

const searchJob = async (req, res) => {
    const keyword = req.query.keyword;
    const location = req.query.location;
    const companyname = req.query.companyname;
    const jobtype = req.query.jobtype;
    console.log(`Search API hit with keyword: "${keyword}"`);

    try {
        const jobs = await Job.find({
            // jobTitle: { $regex: keyword, $options: 'i' }
              $or: [
            { jobTitle: { $regex: keyword, $options: 'i' } },
            { location: { $regex: location || keyword, $options: 'i' } },
            { companyName: { $regex:  companyname || keyword, $options: 'i' } },
            { jobType: { $regex: jobtype || keyword , $options: 'i' } }
            ]
        });

        if (jobs.length === 0) {
            return res.status(401).json({ msg: "No results found for the search" });
        }

        console.log(jobs);
        return res.status(200).json({ msg: "Jobs found", jobs });
    } catch (e) {
        console.error("Error searching data:", e);
        return res.status(500).json({ msg: "Error searching data" });
    }
};

module.exports = searchJob;
