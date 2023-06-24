import "./LoadingSpinner.css"

export default function LoadingSpinner () {

    return (
        <div className="LoadingSpinner">
            <div>
                <div className="LoadingSpinner-text">Loading</div>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}