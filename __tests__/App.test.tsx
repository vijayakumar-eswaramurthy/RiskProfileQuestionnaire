// __tests__/App.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Component', () => {
  it('should render NavigationStack', () => {
    const { getAllByRole } = render(<App />);
  });
});
