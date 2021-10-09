import { render, screen } from '@testing-library/react';
import App from './App';

test('App should render that is working', () => {
  render(<App />);
  const linkElement = screen.getByText(/app is working/i);
  expect(linkElement).toBeInTheDocument();
});
