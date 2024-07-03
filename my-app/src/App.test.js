import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom'; // or MemoryRouter
import App from './App';
import Contact from './components/Contact'
import Projects from './components/Projects'

// checks components within App component
describe('App Unit Tests', () => {

  test('renders home page', () => {
    render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    );
    expect(screen.getByText('Hi, my name is Chad.')).toBeInTheDocument();
  });

  test('renders projects page', () => {
    render(<Projects />);
    expect(screen.getByText('The following are samples of projects that I have worked on in the past. Clicking on a project will provide a description.')).toBeInTheDocument()
  });

  test('renders contact page', () => {
    render(<Contact />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();

  });

});