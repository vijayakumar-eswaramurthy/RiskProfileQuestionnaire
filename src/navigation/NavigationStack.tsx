import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//App global Dark mode support
import { Appearance, ColorSchemeName } from 'react-native';
import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
const CustomLightTheme: Theme = {// Define custom themes with TypeScript types
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    background: 'white',
    text: 'rgb(28, 28, 30)', // Set your desired dark color here
    // ... other colors
  },
};
const CustomDarkTheme: Theme = {// Define custom themes with TypeScript types
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'black',
    background: 'black',
    text: 'white',
    // ... other colors
  },
};
const colorScheme: ColorSchemeName = Appearance.getColorScheme();//Detect the color scheme

//App Screen Imports
import HomeScreen from '../screens/home/HomeScreen';
import AssessmentScreen from '../screens/assessment/AssessmentScreen';
import ResultScreen from '../screens/result/ResultScreen';

// Define the types for your navigation parameters
type RootStackParamList = {
  Home: undefined;
  Assessment: undefined;
  Result: { results: { totalScore: number; riskProfileCategory: string } };
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Define the navigator component
const NavigationStack: React.FC = () => {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // This will hide the header for all screens
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Assessment" component={AssessmentScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};





export default NavigationStack;
