import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultScreen from '../src/screens/result/ResultScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Result: { results: { totalScore: number; riskProfileCategory: string } };
  Assessment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    setParams: jest.fn(),
    setOptions: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: jest.fn(),
    getParent: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    getId: jest.fn(),
    getState: jest.fn(),
  } as unknown as NativeStackNavigationProp<RootStackParamList, 'Result'>,
  route: {
    key: 'Result',
    name: 'Result' as const,
    params: {
      results: {
        totalScore: 25,
        riskProfileCategory: 'Medium',
      },
    },
  } as RouteProp<RootStackParamList, 'Result'>,
  ...props,
});

describe('ResultScreen Component', () => {
  it('should render correctly', () => {
    const props = createTestProps({});
    const { getByText } = render(
      <NavigationContainer>
        <ResultScreen {...props} />
      </NavigationContainer>
    );

    expect(getByText('Kudos! for successfully completing the assessment.')).toBeTruthy();
    expect(getByText('Your Total Score:')).toBeTruthy();
    expect(getByText('25')).toBeTruthy();
    expect(getByText('Your Risk Profile Category:')).toBeTruthy();
    expect(getByText('Medium')).toBeTruthy();
  });

  it('should show InfoModal when info icon is pressed', () => {
    const props = createTestProps({});
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <ResultScreen {...props} />
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('info-icon'));
    expect(getByText('Risk Level 1: Low')).toBeTruthy();
  });
});
