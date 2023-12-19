// File: App.js
import React, { useState } from "react";
import DestinationSelector from "./DestinationSelector";
import DateSelector from "./DateSelector";
import BookingConfirmation from "./BookingConfirmation";

const App = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleSelectDates = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <div>
      <h1>Awesome Holiday Booking</h1>
      {!selectedDestination && (
        <DestinationSelector onSelectDestination={handleSelectDestination} />
      )}
      {selectedDestination && !selectedDates && (
        <DateSelector onSelectDates={handleSelectDates} />
      )}
      {selectedDestination && selectedDates && (
        <BookingConfirmation
          destination={selectedDestination}
          dates={selectedDates}
        />
      )}
    </div>
  );
};

export default App;
