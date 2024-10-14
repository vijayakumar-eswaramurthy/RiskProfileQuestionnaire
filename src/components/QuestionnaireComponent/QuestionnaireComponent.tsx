/**
 * Page: Questionnaire Reusable Component 
 * Description:  
 * This reusable component is a pure component. 
 * Returns react elements for question and multiple choice options.
 */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, HelperText, RadioButton, Text } from 'react-native-paper';
import { QuestionnaireInterface } from './QuestionnaireInterface';
import TextGlobal from '../ui/TextGlobal';
import { useTheme } from '@react-navigation/native';

interface QuestionnaireProps {
  questions: QuestionnaireInterface[];
  onCompleted: (results: { totalScore: number; riskProfileCategory: string }) => void;
}

const QuestionnaireComponent: React.FC<QuestionnaireProps> = ({ questions, onCompleted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  const [isShowHelper, setShowHelper] = useState(false);

  useEffect(() => {
    if (selectedOptions[questions[currentQuestionIndex].id] !== undefined) {
      setShowHelper(false);
    }
  }, [currentQuestionIndex, selectedOptions]);

  const handleSelectOption = (questionId: string, optionPoints: number) => {
    setSelectedOptions(prev => ({ ...prev, [questionId]: optionPoints }));
  };

  const handleNext = () => {
    if (selectedOptions[questions[currentQuestionIndex].id] === undefined) {
      setShowHelper(true);
    } else if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const totalScore = Object.values(selectedOptions).reduce((acc, curr) => acc + curr, 0);
    const riskProfileCategory = totalScore <= 10 ? 'Low' : totalScore <= 20 ? 'Low to Medium' : totalScore <= 30 ? 'Medium' : totalScore <= 40 ? 'Medium to High' : 'High';
    onCompleted({ totalScore, riskProfileCategory });
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const {colors} = useTheme();
  return (
    <View>
      <View key={questions[currentQuestionIndex].id}>
        <TextGlobal variant="headlineMedium">{questions[currentQuestionIndex].question}</TextGlobal>
        <View style={{ height: 10 }} />
        {questions[currentQuestionIndex].options.map(option => (
          <RadioButton.Item
            key={option.id}
            label={option.text}
            value={option.id}
            labelStyle={{ color: colors.text }} 
            status={selectedOptions[questions[currentQuestionIndex].id] === option.points ? 'checked' : 'unchecked'}
            onPress={() => handleSelectOption(questions[currentQuestionIndex].id, option.points)}
          />
        ))}
      </View>
      <View>
        {isShowHelper ? (<HelperText testID='helper-text' type="error" visible={true}>
          {'Please select an option to proceed.'}
        </HelperText>) : null}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
        {currentQuestionIndex > 0 && <Button mode="contained" onPress={handleBack}>{"Back"}</Button>}
        {!isLastQuestion && <Button mode="contained" onPress={handleNext}>{"Next"}</Button>}
        {isLastQuestion && <Button mode="contained" onPress={handleSubmit}>{"Submit"}</Button>}
      </View>
    </View>
  );
};

export default QuestionnaireComponent;