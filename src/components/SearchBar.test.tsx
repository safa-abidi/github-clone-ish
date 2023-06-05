import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('triggers search callback with the entered value', () => {
  const mockSearch = jest.fn();

  render(<SearchBar placeholder="Search" onSearch={mockSearch} />);

  const inputElement = screen.getByPlaceholderText(/search/i);
  const searchButton = screen.getByRole('button');

  // Simulate user input
  fireEvent.change(inputElement, { target: { value: 'example query' } });

  // Trigger search by clicking the button
  fireEvent.click(searchButton);

  expect(mockSearch).toHaveBeenCalledTimes(1);
  expect(mockSearch).toHaveBeenCalledWith('example query');
});

test('triggers search callback with an empty value when Enter key is pressed', () => {
  const mockSearch = jest.fn();

  render(<SearchBar placeholder="Search" onSearch={mockSearch} />);

  const inputElement = screen.getByPlaceholderText(/search/i);

  // Simulate user input
  fireEvent.change(inputElement, { target: { value: 'example query' } });

  // Trigger search by pressing Enter key
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

  expect(mockSearch).toHaveBeenCalledTimes(1);
  expect(mockSearch).toHaveBeenCalledWith('example query');
});

test('triggers search callback with an empty value when Enter key is pressed with an empty input', () => {
  const mockSearch = jest.fn();

  render(<SearchBar placeholder="Search" onSearch={mockSearch} />);

  const inputElement = screen.getByPlaceholderText(/search/i);

  // Trigger search by pressing Enter key without entering any value
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

  expect(mockSearch).toHaveBeenCalledTimes(1);
  expect(mockSearch).toHaveBeenCalledWith('');
});
