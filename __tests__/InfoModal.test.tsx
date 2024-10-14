import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InfoModal from '../src/screens/result/InfoModal';

describe('InfoModal Component', () => {
  it('should render correctly when visible', () => {
    const { getByText } = render(
      <InfoModal isVisible={true} hideModal={jest.fn()} />
    );

    expect(getByText('Risk Level 1: Low')).toBeTruthy();
    expect(getByText('Risk Level 2: Low to Medium')).toBeTruthy();
    expect(getByText('Risk Level 4: Medium to High')).toBeTruthy();
    expect(getByText('Risk Level 5: High')).toBeTruthy();
  });

  it('should call hideModal when close button is pressed', () => {
    const hideModal = jest.fn();
    const { getByText } = render(
      <InfoModal isVisible={true} hideModal={hideModal} />
    );

    fireEvent.press(getByText(' X '));
    expect(hideModal).toHaveBeenCalled();
  });
});
