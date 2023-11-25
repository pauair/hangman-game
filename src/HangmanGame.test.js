import { render, screen } from '@testing-library/react';
import HangmanGame from './HangmanGame';

test('renders learn react link', () => {
  render(<HangmanGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
