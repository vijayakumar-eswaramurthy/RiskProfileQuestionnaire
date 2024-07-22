/**
 * Page: Questionnaire Reusable Component 
 * Description:  
 * This reusable component is a pure component. 
 * Returns react elements for question and multiple choice options.
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { QuestionnaireInterface } from './QuestionnaireInterface';


const QuestionnaireComponent = ({ id, question, options }: QuestionnaireInterface): React.JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
    const handleSelectOption = (questionId: string, optionPoints: number) => {
        setSelectedOptions(prev => ({ ...prev, [questionId]: optionPoints }));
    };
    return (
        <View style={styles.QuestionnaireContainer}>
            <View key={id}>
                <Text>{question}</Text>
                {options.map(option => (
                    <RadioButton.Item
                        key={option.id}
                        label={option.text}
                        value={option.id}
                        status={selectedOptions[id] === option.points ? 'checked' : 'unchecked'}
                        onPress={() => handleSelectOption(id, option.points)}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    QuestionnaireContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    QuestionnaireTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    QuestionnaireDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default QuestionnaireComponent;