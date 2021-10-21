import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [tabIndex, setTabIndex] = useState(0)

    const fetchJobs = async () => {
        const res = await fetch(url);
        const jobsData = await res.json();
        setJobs(jobsData);
        setLoading(false);
    }
    
    useEffect(() =>{
        setTimeout(() =>fetchJobs(),2000)
    },[])


    if (loading){
        return(
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    const {title, dates, duties, company} = jobs[tabIndex];
  
  return(
    <section className="section">
        <div className='title'>
            <h2> Work experiences</h2>
            <div className='underline'></div>
        </div>
        <div className='jobs-center'>
{/* button container */}
            <div className='btn-container'>
                {jobs.map((job,index) => {
                    return <button 
                                key={job.id} 
                                className={`job-btn ${index===tabIndex && 'active-btn'}` }
                                onClick={() => setTabIndex(index)}
                            >
                                {job.company}
                            </button>
                })}
            </div>
{/* jobs infor */}
            <article className="job-info">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className='job-dates'>{dates}</p>
                {duties.map((duty,i) => {
                    return(
                        <div key={i} className="job-desc"> 
                            <FaAngleDoubleRight className="job-icon"/>
                            {duty}
                        </div>
                    )
                    }
                )}
            </article>
        </div> 
    </section>    
  ) 
  
}

export default App