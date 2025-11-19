import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

// Reducer function to manage available times
export const updateTimes = (state, action) => {
  // For now, it returns the same hardcoded values regardless of the date (action)
  // In a real app, you would fetch times based on action.date
  console.log("Updating times for date:", action);
  return initializeTimes();
};

// Function to initialize available times
export const initializeTimes = () => {
  // In a real app, this could fetch data from an API
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
};

function Main() {
  // useReducer setup
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
