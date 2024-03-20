import React, { useState } from "react";
import {
  CountrySelector,
  StateSelector,
  CitySelector,
} from "volkeno-react-country-state-city";
import "volkeno-react-country-state-city/dist/index.css";

const CountryStateCity = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleCountrySelect = (option) => {
    setCountry(option);
    // Reset state and city when country changes
    setState("");
    setCity("");
  };

  const handleStateSelect = (option) => {
    setState(option);
    // Reset city when state changes
    setCity("");
  };

  const handleCitySelect = (option) => {
    setCity(option);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid grey",
        margin: "5rem",
      }}
    >
      <CountrySelector
        onChange={handleCountrySelect}
        name="country"
        placeholder="Select a country"
        value={country}
      />
      <StateSelector
        country={country}
        name="state"
        value={state}
        countryPlaceholder="Select a country first"
        onChange={handleStateSelect}
      />
      <CitySelector
        state={state}
        name="city"
        value={city}
        statePlaceholder="Select a state first"
        onChange={handleCitySelect}
      />
    </div>
  );
};

export default CountryStateCity;
