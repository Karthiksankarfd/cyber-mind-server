const Job =  require("../modals/jobModal")

const postJob = async (req, res) =>{

    const {jobTitle, companyName, location, jobType,minSalary ,maxSalary,applicationDeadLine ,descriptions ,date} = req.body
    console.log(jobTitle)
    try{
        const job = new Job({
            date,
            jobTitle, 
            companyName, 
            location, 
            jobType,
            minSalary, maxSalary,applicationDeadLine, descriptions
        })
        await job.save()

        return res.status(201).json({msg : "Job Posted Successfully" , job})
    }catch(e){
        console.log("can't Post job please try again" , e )
        return res.status(500).json({msg:"can't Post job please try again" , error:e.messagae })
    }


}

module.exports = postJob ;