import React, { useState } from "react";

function Whether() {
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleInputChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make API request to get country code based on country name
    fetch(`https://restcountries.com/v2/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 404) {
          setCountryCode("Country not found");
        } else {
          setCountryCode(data[0].alpha2Code);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="countryName">Enter a country:</label>
        <input type="text" id="countryName" value={countryName} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <p>Country code: {countryCode}</p>
    </div>
  );
}

export default Whether;
