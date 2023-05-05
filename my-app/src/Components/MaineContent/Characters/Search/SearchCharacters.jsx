import { useState } from "react";

function SearchCharacters() {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (event) => {
        const inputVal = event.target.value;
        setInputData(inputVal);
        localStorage.setItem("searchTerm", inputVal);
    };

    return (
        <div>
            <div className="search-box">
                <input
                    className="search-box-input"
                    value={inputData}
                    onChange={handleInputChange}
                />
                <button className="search-box-btn">Search</button>
            </div>
        </div>
    );
}

export default SearchCharacters;
