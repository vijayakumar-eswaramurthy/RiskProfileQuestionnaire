/**
 * Page: Questionnaire Reusable Component 
 * Description:  
 * This reusable component is a pure component. 
 * Returns react elements for question and multiple choice options.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';

type QuestionnaireProps = {
    _question: string,
    _options: any
}

const QuestionnaireScreen = ({ _question, _options }: QuestionnaireProps): React.JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.QuestionnaireContainer}>
            <Text
                style={[
                    styles.QuestionnaireTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {_question}
            </Text>
            <Text
                style={[
                    styles.QuestionnaireDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {_options}
            </Text>
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

export default QuestionnaireScreen;