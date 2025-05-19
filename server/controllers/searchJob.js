const Job = require("../modals/jobModal");

const searchJob = async (req, res) => {
  const { keyword = "", jobType, minSalary, maxSalary } = req.query;

  console.log(`Search API hit with:`, req.query);

  try {
    const searchQuery = {
      $and: [],
    };

    // Keyword search across multiple fields
    if (keyword) {
      searchQuery.$and.push({
        $or: [
          { jobTitle: { $regex: keyword, $options: "i" } },
          { location: { $regex: keyword, $options: "i" } },
          { companyName: { $regex: keyword, $options: "i" } },
          { jobType: { $regex: keyword, $options: "i" } },
        ],
      });
    }

    // Filter by jobType if provided
    if (jobType) {
      searchQuery.$and.push({ jobType: { $regex: jobType, $options: "i" } });
    }

    // Filter by salary range if both min and/or max provided
    if (minSalary || maxSalary) {
      const salaryFilter = {};
      if (minSalary) salaryFilter.maxSalary = { $gte: Number(minSalary) };
      if (maxSalary) salaryFilter.minSalary = { ...salaryFilter.minSalary, $lte: Number(maxSalary) };
      searchQuery.$and.push(salaryFilter);
    }

    // If no filters applied, remove $and to avoid empty filter
    if (searchQuery.$and.length === 0) {
      delete searchQuery.$and;
    }

    const jobs = await Job.find(searchQuery);

    if (jobs.length === 0) {
      return res.status(404).json({ msg: "No results found for the search." });
    }

    res.status(200).json({ msg: "Jobs found", jobs });
  } catch (error) {
    console.error("Error searching jobs:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = searchJob;
