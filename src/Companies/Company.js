import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../API/api";
import { v4 as uuidv4 } from 'uuid';
import CompanyBanner from "./CompanyBanner";
import LoadingSpinner from "../LoadingSpinner";
import Job from "../Jobs/Job";
import './Company.css'

export default function Company () {
    const {company_handle} = useParams();
    const [companyData, setCompanyData] = useState(null)
    console.debug("CompanyDetail", "handle=", company_handle);

    useEffect(() => {
        async function getCompany() {
            setCompanyData(await JoblyApi.getCompany(company_handle));
        };
        getCompany();
    }, [company_handle])

    if (!companyData) return <LoadingSpinner />

    return (

        <div className="Company-Page">
            <CompanyBanner 
                    key={uuidv4()}
                    name={companyData.name}
                    handle={companyData.handle}
                    description={companyData.description}
                    numEmployees={companyData.numEmployees}
                />
            <h3>{companyData.name} job postings: </h3>
            <div className="Company-Jobs">
                {companyData.jobs ? 
                    companyData.jobs.map(job => 
                        <Job 
                            key={uuidv4()}
                            title={job.title}
                            salary={job.salary}
                            equity={job.equity}
                        />)
                    : 
                    <p>There are currently no job postings. </p>
                }
            </div>
        </div>
    )
}