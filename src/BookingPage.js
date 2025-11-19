import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;