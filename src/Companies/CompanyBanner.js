import "./Company.css"

export default function CompanyBanner ({name, description, numEmployees}) {
    return (
        <div className="Company-Banner">
            <h4>Compnay Name: {name}</h4>
            <p className="Company-Banner-text "><b>Description: </b></p>
            <p className="Company-Banner-text ">{description}</p>
            <p className="Company-Banner-text ">Number of employees: {numEmployees}</p>
        </div>
    )
}






