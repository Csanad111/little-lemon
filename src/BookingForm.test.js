import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    const availableTimeSlots = ['17:00', '18:00'];
    const dispatch = jest.fn();

    test('should render all labels', () => {
        render(<BookingForm availableTimeSlots={availableTimeSlots} dispatch={dispatch} />);
        expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    });

    test('should have validation attributes', () => {
        render(<BookingForm availableTimeSlots={availableTimeSlots} dispatch={dispatch} />);

        const dateInput = screen.getByLabelText(/Choose date/i);
        expect(dateInput).toHaveAttribute('required');

        const timeSelect = screen.getByLabelText(/Choose time/i);
        expect(timeSelect).toHaveAttribute('required');

        const guestsInput = screen.getByLabelText(/Number of guests/i);
        expect(guestsInput).toHaveAttribute('required');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');

        const occasionSelect = screen.getByLabelText(/Occasion/i);
        expect(occasionSelect).toHaveAttribute('required');
    });

    test('enable submit button if form is valid', () => {
        render(<BookingForm availableTimeSlots={availableTimeSlots} dispatch={dispatch} />);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
        expect(submitButton).not.toBeDisabled();
    });

    test('disable submit button if guests number is invalid', () => {
        render(<BookingForm availableTimeSlots={availableTimeSlots} dispatch={dispatch} />);
        const guestsInput = screen.getByLabelText(/Number of guests/i);
        const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });

        // Set invalid value (less than 1)
        fireEvent.change(guestsInput, { target: { value: '0' } });
        expect(submitButton).toBeDisabled();

        // Set invalid value (more than 10)
        fireEvent.change(guestsInput, { target: { value: '11' } });
        expect(submitButton).toBeDisabled();

        // Set valid value
        fireEvent.change(guestsInput, { target: { value: '5' } });
        expect(submitButton).not.toBeDisabled();
    });
});
