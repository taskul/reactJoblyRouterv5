import logo_lg from "../logo_lg.png"
import "./HomePage.css"

export default function HomePage() {

    return (
        <div className="Homepage-logo">
            <img src={logo_lg} alt='Jobly logo' className="Homepage-logo-img" />
            <h1>Welcome to Jobly</h1>
            <p>An easly place to apply for a job in just a couple of clicks.</p>
        </div>
    )
}