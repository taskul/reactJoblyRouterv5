import { useEffect, useState } from "react";
import "./Companies.css"
import "../MainCss/Forms.css"
import JoblyApi from "../API/api";
import { v4 as uuidv4 } from 'uuid';
import LoadingSpinner from "../LoadingSpinner";
import CompanyTumbnail from "./CompanyTumbnail";

export default function Companies() {
    const [companiesData, setCompaniesData] = useState(null);
    // keeps track of search input field
    const [searchFieldData, setSearchFieldData] = useState('');
    // used for fetching the data
    const [searchedName, setSearchedName] = useState(null);
    // using for storing response array
    const [searchResults, setSearchResults] = useState(null);
    // control clearing search results
    const [clearSearchResults, setClearSearchResults] = useState(false);

    // fetches data on all companies
    useEffect(() => {
        async function getCompanies() {
            setCompaniesData(await JoblyApi.getAllCompanies())
        };
        getCompanies();
    }, [clearSearchResults]);

    // function to clear search results
    const clearResults = () => {
        setClearSearchResults(!clearSearchResults)
        setSearchResults('')
        setSearchedName('')
    }

    // fetches data on based on search key word
    // keeps track of searchedName which is set by handleSubmit function
    useEffect(() => {
        async function searchCompanyNames() {
            if (searchedName) {
                setSearchResults(await JoblyApi.findCompanyByName(searchedName))
            }
        }
        searchCompanyNames()
    }, [searchedName])

    // handles search input field data
    const handleChange = (e) => {
        setSearchFieldData(e.target.value)
    }

    // handles submition of the search form
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchedName(searchFieldData);
        setSearchFieldData('');
    }


    if (!companiesData) return <LoadingSpinner />

    // set array for the datae to display
    // if compnay name was searched, display search results, 
    // otherwise display array of all companies
    const dataDisplayed = searchResults ? searchResults : companiesData;

    return (
        <div>
            {searchResults ?
                <button onClick={clearResults}
                    className="Companies-clear-btn"
                >Clear</button>
                :
                null
            }
            <form onSubmit={handleSubmit} className="Form">
                <input
                    type="text"
                    id="searchCompanies"
                    name="searchCompanies"
                    placeholder="Search company name"
                    value={searchFieldData}
                    onChange={handleChange}
                    className="Form-input"
                />
                <button className="Form-btn">Search</button>
            </form>
            <h1>Companies that have profiles on Jobly</h1>
            <div className="Compnaies-list">
                {dataDisplayed.map(comp =>
                    <CompanyTumbnail
                        key={uuidv4()}
                        name={comp.name}
                        handle={comp.handle}
                        description={comp.description}
                        numEmployees={comp.numEmployees}
                    />
                )}
            </div>
        </div>
    )
}