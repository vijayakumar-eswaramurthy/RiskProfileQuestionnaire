import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/home/HomeScreen';
import { HomeScreenModel } from '../src/screens/home/HomeScreenModel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
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
  } as unknown as NativeStackNavigationProp<RootStackParamList, 'Home'>,
  route: {
    key: 'Home',
    name: 'Home' as const,
    params: undefined,
  } as RouteProp<RootStackParamList, 'Home'>,
  ...props,
});

describe('HomeScreen Component', () => {
  it('should render correctly', () => {
    const props = createTestProps({});
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen {...props} />
      </NavigationContainer>
    );

    expect(getByText(HomeScreenModel.description)).toBeTruthy();
    expect(getByText(HomeScreenModel.guideText)).toBeTruthy();
    expect(getByText(HomeScreenModel.buttonLabel)).toBeTruthy();
  });

  it('should navigate to Assessment screen on button press', () => {
    const props = createTestProps({});
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen {...props} />
      </NavigationContainer>
    );

    fireEvent.press(getByText(HomeScreenModel.buttonLabel));
    expect(props.navigation.navigate).toHaveBeenCalledWith('Assessment');
  });
});
