import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const wambam = screen.getByText(/wambam/i);
  expect(wambam).toBeInTheDocument();
  const add = screen.getByText('Hey Add');
  const minus = screen.getByText(/Hey minus/i);
  const count = screen.getByTestId('madCount');
  expect(count).toBeInTheDocument();
  expect(add).toBeInTheDocument();
  expect(minus).toBeInTheDocument();
  fireEvent.click(add);
  expect(screen.getByText(/count : 1/i)).toBeInTheDocument();
  fireEvent.click(minus);
  expect(screen.getByText(/count : 0/i)).toBeInTheDocument();
});


test('renders learn react link', () => {
  render(<App />);
  const wambam = screen.getByText(/wambam/i);
  expect(wambam).toBeInTheDocument();
  const add = screen.getByText('Hey Add');
  const minus = screen.getByText(/Hey minus/i);
  const count = screen.getByTestId('madCount');
  expect(count).toBeInTheDocument();
  expect(add).toBeInTheDocument();
  expect(minus).toBeInTheDocument();
  fireEvent.click(add);
  expect(screen.getByText(/count : 1/i)).toBeInTheDocument();
  fireEvent.click(minus);
  expect(screen.getByText(/count : 0/i)).toBeInTheDocument();
});
