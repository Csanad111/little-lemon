import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
    // State for each form field
    const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
    const [bookingTime, setBookingTime] = useState(availableTimes.length > 0 ? availableTimes[0] : "");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    // Handler for date change
    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setBookingDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    };

    // Check if the form is valid
    const isFormValid = () => {
        return (
            bookingDate !== "" &&
            bookingTime !== "" &&
            numberOfGuests >= 1 &&
            numberOfGuests <= 10 &&
            occasion !== ""
        );
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (isFormValid()) {
            setIsSubmitted(true);
            // Reset form logic could go here
        }
    };

    if (isSubmitted) {
        return (
            <div className="success-message" aria-live="polite">
                <h3>Booking Confirmed!</h3>
                <p>We look forward to seeing you on {bookingDate} at {bookingTime}.</p>
                <p>Number of guests: {numberOfGuests}</p>
                <p>Occasion: {occasion}</p>
                <button onClick={() => setIsSubmitted(false)} className="btn-primary">Make another reservation</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={bookingDate}
                onChange={handleDateChange}
                required
                aria-label="Choose date"
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                required
                aria-label="Choose time"
            >
                {/* Map over the availableTimes array to create options */}
                {availableTimes.map(time => <option key={time}>{time}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                required
                aria-label="Number of guests"
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-label="Occasion"
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your reservation"
                disabled={!isFormValid()}
                aria-label="Make Your reservation"
            />
        </form>
    );
}

export default BookingForm;