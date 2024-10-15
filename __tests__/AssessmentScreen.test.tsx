import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import QuestionnaireComponent from '../src/components/QuestionnaireComponent/QuestionnaireComponent';
import { QuestionnaireInterface } from '../src/components/QuestionnaireComponent/QuestionnaireInterface';
import HeaderLogo from '../src/components/headerLogo/HeaderLogo';
import AssessmentScreen from '../src/screens/assessment/AssessmentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

const mockQuestions: QuestionnaireInterface[] = [
  {
    id: 'q1',
    question: 'Question 1?',
    options: [
      { id: 'o1', text: 'Option 1', points: 1 },
      { id: 'o2', text: 'Option 2', points: 2 },
    ],
  },
  {
    id: 'q2',
    question: 'Question 2?',
    options: [
      { id: 'o1', text: 'Option 1', points: 1 },
      { id: 'o2', text: 'Option 2', points: 2 },
    ],
  },
];

describe('QuestionnaireComponent', () => {
  it('should render the first question correctly', async () => {
    await waitFor(async () => {
      const { getByText } = render(
        <QuestionnaireComponent questions={mockQuestions} onCompleted={jest.fn()} />
      );

      expect(getByText('Question 1?')).toBeTruthy();
      expect(getByText('Option 1')).toBeTruthy();
      expect(getByText('Option 2')).toBeTruthy();
    });
  });

  it('should show helper text if no option is selected and Next is pressed', async () => {
    await waitFor(async () => {
      const { getByText, getByTestId } = render(
        <QuestionnaireComponent questions={mockQuestions} onCompleted={jest.fn()} />
      );

      await waitFor(async () => { fireEvent.press(getByText('Next')); });
      expect(getByTestId('helper-text')).toBeTruthy();
      expect(getByText('Please select an option to proceed.')).toBeTruthy();
    });
  });

  it('should navigate to the next question when an option is selected and Next is pressed', async () => {
    await waitFor(async () => {
      const { getByText } = render(
        <QuestionnaireComponent questions={mockQuestions} onCompleted={jest.fn()} />
      );

      await waitFor(async () => {
        fireEvent.press(getByText('Option 1'));
      });

      await waitFor(async () => {
        fireEvent.press(getByText('Next'));
      });

      expect(getByText('Question 2?')).toBeTruthy();
    });
  });

  it('should call onCompleted with the correct results when Submit is pressed', async () => {
    await waitFor(async () => {
      const onCompleted = jest.fn();
      const { getByText } = render(
        <QuestionnaireComponent questions={mockQuestions} onCompleted={onCompleted} />
      );

      await waitFor(async () => {
        fireEvent.press(getByText('Option 1'));
      });

      await waitFor(async () => {
        fireEvent.press(getByText('Next'));
      });
      await waitFor(async () => {
        fireEvent.press(getByText('Option 2'));
      });
      await waitFor(async () => {
        fireEvent.press(getByText('Submit'));
      });

      expect(onCompleted).toHaveBeenCalledWith({
        totalScore: 3,
        riskProfileCategory: 'Low',
      });
    });
  });
});

describe('HeaderLogoComponent', () => {
  it('should render the Header logo correctly', async () => {
    await waitFor(async () => {
      const { getByText } = render(
        <HeaderLogo />
      );

      expect(getByText('Risk Profiler')).toBeTruthy();
    });
  });
});


type RootStackParamList = {
  Assessment: undefined;
  Result: { results: { totalScore: number; riskProfileCategory: string } };
};

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
  } as unknown as NativeStackNavigationProp<RootStackParamList, 'Assessment'>,
  route: {
    key: 'Assessment',
    name: 'Assessment' as const,
    params: undefined,
  } as RouteProp<RootStackParamList, 'Assessment'>,
  ...props,
});


describe('AssessmentScreen Component', () => {
  it('should render correctly', async () => {
    await waitFor(async () => {
      const props = createTestProps({});
      const { getByTestId } = render(
        <NavigationContainer>
          <AssessmentScreen {...props} />
        </NavigationContainer>
      );

      expect(getByTestId('assessment-container')).toBeTruthy();
    });
  });
})