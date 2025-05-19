const mongoose = require("mongoose")
require("dotenv").config()
const Jobs = require("../modals/jobModal")

const uri = `mongodb+srv://${encodeURIComponent(process.env.DB_USER_NAME)}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.CLUSTER_URL}/${encodeURIComponent(process.env.DB_NAME)}?retryWrites=true&w=majority&appName=Cluster-one`;
const connectToDb = async () =>{
    try{
        await mongoose.connect(uri)
        await Jobs.insertMany([
  {
    companyName: "Amazon",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    jobTitle: "Full Stack Developer",
    postedOn: "24h Ago",
    experience: "1–3 yr Exp",
    jobType: "Onsite",
    salary: "12 LPA",
    minSalary: 10,
    maxSalary: 12,
    location: "Bangalore",
    descriptions: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    companyName: "Google",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    jobTitle: "Frontend Developer",
    postedOn: "2d Ago",
    experience: "0–2 yr Exp",
    jobType: "Remote",
    salary: "10 LPA",
    minSalary: 8,
    maxSalary: 10,
    location: "Hyderabad",
    descriptions: [
      "Build intuitive UI using modern React features",
      "Work with cross-functional teams for better UX"
    ]
  },
  {
    companyName: "Microsoft",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    jobTitle: "Backend Engineer",
    postedOn: "5h Ago",
    experience: "2–4 yr Exp",
    jobType: "Hybrid",
    salary: "14 LPA",
    minSalary: 12,
    maxSalary: 14,
    location: "Chennai",
    descriptions: [
      "Design scalable APIs with Node.js and Express",
      "Optimize server response times and performance"
    ]
  },
  {
    companyName: "Netflix",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    jobTitle: "UI/UX Designer",
    postedOn: "12h Ago",
    experience: "1–2 yr Exp",
    jobType: "Onsite",
    salary: "11 LPA",
    minSalary: 9,
    maxSalary: 11,
    location: "Bangalore",
    descriptions: [
      "Design wireframes and user flows for mobile apps",
      "Collaborate with devs to maintain design systems"
    ]
  },
  {
    companyName: "Facebook",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    jobTitle: "React Native Developer",
    postedOn: "3d Ago",
    experience: "2–5 yr Exp",
    jobType: "Remote",
    salary: "13 LPA",
    minSalary: 11,
    maxSalary: 13,
    location: "Hyderabad",
    descriptions: [
      "Develop cross-platform apps with React Native",
      "Integrate REST APIs and third-party libraries"
    ]
  },
  {
    companyName: "Tesla",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/5969/5969435.png",
    jobTitle: "DevOps Engineer",
    postedOn: "8h Ago",
    experience: "3+ yr Exp",
    jobType: "Hybrid",
    salary: "15 LPA",
    minSalary: 13,
    maxSalary: 15,
    location: "Chennai",
    descriptions: [
      "Automate deployment pipelines using CI/CD tools",
      "Monitor infrastructure performance and scale"
    ]
  }
]
);
         console.log("Jobs inserted successfully");
        console.log("Connected to MongoDB")
    }catch(e){
        console.log("ERROR CONNECTING TO DB" , e.message)
    }
}

module.exports = connectToDb