import { useEffect, useState } from "react";
import JoblyApi from "../API/api";
import { v4 as uuidv4 } from 'uuid';
import LoadingSpinner from "../LoadingSpinner";
import "./Jobs.css"
import Job from "./Job";

export default function Jobs () {
    const [jobsData, setJobsData] = useState(null)

    useEffect(() => {
        async function getAllJobs() {
           setJobsData(await JoblyApi.getAllJobs())
        };
        getAllJobs();
    }, []);

    if (!jobsData) return <LoadingSpinner />

    return (
        <div>
            <h3>Available job postings:</h3>
            <div className="Jobs-list">
                {jobsData.map(job => 
                    <Job
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                    />
                )}
            </div>
        </div>
    )
}