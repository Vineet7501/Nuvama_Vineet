// File: components/BookingConfirmation.js
import React from "react";

const BookingConfirmation = ({ destination, dates }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Destination: {destination}</p>
      <p>
        Dates: {dates.startDate} to {dates.endDate}
      </p>
      <p>Your awesome holiday is booked! 🌴✈️</p>
    </div>
  );
};

export default BookingConfirmation;
