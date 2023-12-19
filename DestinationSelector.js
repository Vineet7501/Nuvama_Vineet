// File: components/DestinationSelector.js
import React from "react";

const DestinationSelector = ({ onSelectDestination }) => {
  const handleSelect = (e) => {
    onSelectDestination(e.target.value);
  };

  return (
    <div>
      <label htmlFor="destination">Select Destination:</label>
      <select id="destination" onChange={handleSelect}>
        <option value="">-- Select --</option>
        <option value="beach">Beach</option>
        <option value="mountains">Mountains</option>
        <option value="city">City</option>
      </select>
    </div>
  );
};

export default DestinationSelector;
