import React from 'react'
import Card from './components/Card'

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour", // dollars per hour
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURykvq_p7mqj3bEr-Ie1nxcR1uWgj_E977A&s",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLFW9PjmQSTrcc-BfDZL_8ENLgsuz3Ov0g&s",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GYDIvxL-beJ8TFMwamtsRNTKncCUMcXNdA&s",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Software Engineer (AI)",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZm2fTBsmdLVyzkj_nOPMwr-c8WW2h5fhM-w&s",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/524/809/png-clipart-computer-icons-resume-linkedin-logo-job-hunting-others-blue-angle-thumbnail.png",
    companyName: "LinkedIn",
    datePosted: "6 weeks ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPLLPV1H-qEuCf-7wZNKW6-czc1BGGa8RCA&s",
    companyName: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Hyderabad, India"
  }
];
// console.log(jobOpenings);
  // arr.forEach(function(elem){
  //   console.log(elem);
  // })
  // const arr = [10, 20, 30];
  return (
    <div>
      <div className="parent">
          {/* {arr.map(function(elem){
              return <User name={elem}/>
          })} */}
          {jobOpenings.map(function(elem, idx){
            console.log(idx);
            
            return <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} date={elem.datePosted} logo= {elem.brandLogo}/>
          })}
      </div>
    </div>
  )
}

export default App
