/**
 * Page: Questionnaire Reusable Component 
 * Description:  
 * This reusable component is a pure component. 
 * Returns react elements for question and multiple choice options.
 */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, RadioButton, Text } from 'react-native-paper';
import { QuestionnaireInterface } from './QuestionnaireInterface';

interface QuestionnaireProps {
  questions: QuestionnaireInterface[];
  onCompleted: (results: { totalScore: number; riskProfileCategory: string }) => void;
}

const QuestionnaireComponent: React.FC<QuestionnaireProps> = ({ questions, onCompleted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});

  const handleSelectOption = (questionId: string, optionPoints: number) => {
    setSelectedOptions(prev => ({ ...prev, [questionId]: optionPoints }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
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

  return (
    <View>
      <View key={questions[currentQuestionIndex].id}>
        <Text variant="headlineMedium">{questions[currentQuestionIndex].question}</Text>
        <View style={{ height: 10 }} />
        {questions[currentQuestionIndex].options.map(option => (
          <RadioButton.Item
            key={option.id}
            label={option.text}
            value={option.id}
            status={selectedOptions[questions[currentQuestionIndex].id] === option.points ? 'checked' : 'unchecked'}
            onPress={() => handleSelectOption(questions[currentQuestionIndex].id, option.points)}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
        {currentQuestionIndex > 0 && <Button mode="contained" onPress={handleBack}>{"Back"}</Button>}
        {!isLastQuestion && <Button mode="contained" onPress={handleNext}>{"Next"}</Button>}
        {isLastQuestion && <Button mode="contained" onPress={handleSubmit}>{"Submit"}</Button>}
      </View>
    </View>
  );
};

export default QuestionnaireComponent;