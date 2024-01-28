import React, { useState } from "react";
import countryData from "./countryData.json";
import "./App.css";
function App() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    setSearchText(event.target.value);

    if (inputText === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = countryData.filter((country) =>
        country.name.toLowerCase().startsWith(inputText)
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <h1>Auto Complete Text Box</h1>
      <input
        type="text"
        placeholder="Enter country name"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <ul id="ul">
        {suggestions.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
