/**
 * @format
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// Mock the NavigationStack component
jest.mock('../src/navigation/NavigationStack', () => 'NavigationStack');

describe('App', () => {
  it('renders the NavigationStack component', () => {
    const { getByTestId} = render(<App />);
    expect(getByTestId('navigation-stack')).toBeTruthy();
  });

  // Add more tests here to cover different scenarios
});
