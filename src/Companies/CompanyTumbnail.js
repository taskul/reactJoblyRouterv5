import "./Companies.css"

export default function CompanyTumbnail ({name, handle, description, numEmployees}) {
    return (
        <div className="Company-thumbnail">
            <h4 className="Company-thumbnail-title">Name: {name}</h4>
            <p className="Company-thumbnail-sm-font left-aligned"><b>Compnay handle:</b> {handle}</p>
            <p className="Company-thumbnail-sm-font left-aligned"><b>Description: </b></p>
            <p className="Company-thumbnail-sm-font left-aligned">{description}</p>
            <p className="Company-thumbnail-sm-font left-aligned">Number of employees: {numEmployees}</p>
        </div>
    )
}






