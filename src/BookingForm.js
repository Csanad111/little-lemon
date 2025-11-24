import React, { useState } from 'react';

function BookingForm({ availableTimeSlots, dispatch }) {
    const [bookingDate, setBookingDate] = useState(new Date().toISOString().split('T')[0]);
    const [bookingTime, setBookingTime] = useState(availableTimeSlots.length > 0 ? availableTimeSlots[0] : "");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const changeDate = (e) => {
        const newDate = e.target.value;
        setBookingDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    };

    const isValid = bookingDate !== "" && bookingTime !== "" && numberOfGuests >= 1 && numberOfGuests <= 10 && occasion !== "";

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            setIsSubmitted(true);
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
                onChange={changeDate}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                required
            >
                {availableTimeSlots.map(time => <option key={time}>{time}</option>)}
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
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your reservation"
                disabled={!isValid}
            />
        </form>
    );
}

export default BookingForm;