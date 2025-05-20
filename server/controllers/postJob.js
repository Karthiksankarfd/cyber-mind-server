const Job =  require("../modals/jobModal")

const postJob = async (req, res) =>{

    const {jobTitle, companyName, location, jobType,minSalary ,maxSalary,applicationDeadLine ,newJobdescriptions ,date} = req.body
    console.log(jobTitle)
    try{
        const job = new Job({
            date,
            jobTitle, 
            companyName, 
            location, 
            jobType,
            minSalary:minSalary/100000, maxSalary : maxSalary /100000,applicationDeadLine ,
            salary :  (maxSalary/100000).toString() + "LPA",
            newJobdescriptions ,
            descriptions:[ "A user-friendly interface lets you browse stunning photos and videos",
            "Filter destinations based on interests and travel style, and create personalized"],
            
        })
        await job.save()
        return res.status(201).json({msg : "Job Posted Successfully" , job})
    }catch(e){
        console.log("can't Post job please try again" , e )
        return res.status(500).json({msg:"can't Post job please try again" , error:e.messagae })
    }


}

module.exports = postJob ;