import "./Jobs.css"

export default function Job ({title, salary, equity}) {

    return (
        <div className="Job-thumbnail">
            <p className="Job-thumbnail-text">Title: {title}</p>
            <p className="Job-thumbnail-text">Salary: {salary}</p>
            <p className="Job-thumbnail-text">Equity: {equity}</p>
        </div>
    )
}