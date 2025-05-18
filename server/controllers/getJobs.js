
const Jobs = require("../modals/jobModal")

 const getAllJobs = async (req, res) => {
    try {

        const allJobs = await Jobs.find()

        res.status(200).json({
            success: true,
            message: "Jobs fetched successfully",
            allJobs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

module.exports = getAllJobs ;