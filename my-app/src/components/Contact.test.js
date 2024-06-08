import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';
import emailjs from '@emailjs/browser';

// mock emailjs
jest.mock('@emailjs/browser');

// run all unit tests for Contact component
describe('Contact Unit Tests', () => {
    beforeEach(() => {
        emailjs.sendForm.mockClear();
    });

    test('renders contact form correctly', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByText(/Send/i)).toBeInTheDocument();
    });

    test('displays error message if name is empty on submit', () => {
        render(<Contact />);

        fireEvent.click(screen.getByText(/Send/i));

        expect(screen.getByText(/Please provide a name!/i)).toBeInTheDocument();
    });

    test('displays error message if email is empty on submit', () => {
        render(<Contact />);

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Smith' } });
        fireEvent.click(screen.getByText(/Send/i));

        expect(screen.getByText(/Please provide an email!/i)).toBeInTheDocument();
    });

    test('displays error message if message is empty on submit', () => {
        render(<Contact />);

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Smith' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.smith@outlook.com' } });
        fireEvent.click(screen.getByText(/Send/i));

        expect(screen.getByText(/Please provide a message!/i)).toBeInTheDocument();
    });

    test('displays success message on successful form submission', async () => {
        emailjs.sendForm.mockResolvedValue({ status: 200 });

        render(<Contact />);

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Smith' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.smith@outlook.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello!' } });

        await act(async () => {
            fireEvent.click(screen.getByText(/Send/i));
        });

        await screen.findByText(/Thank you John Smith, your message was sent successfully!/i);
    });
});

describe("Contact Integration Tests", () => {
    test('calls emailjs.sendForm on successful form submission', async () => {
        emailjs.sendForm.mockResolvedValue({ status: 200 });

        render(<Contact />);

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Smith' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.smith@outlook.com' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello!' } });

        await act(async () => {
            fireEvent.click(screen.getByText(/Send/i));
        });

        expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
    });
})
