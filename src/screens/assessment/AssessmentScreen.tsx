/**
 * Page: Assessment Screen 
 * Description:  
 * Users will see list of questions with multiple choice answers. 
 * User can navigate between questions. 
 * User can submit and navigate to Results screen.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    ScrollView,
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import QuestionnaireComponent from '../../components/QuestionnaireComponent/QuestionnaireComponent';
import { questionsModel } from './AssessmentModel';

type RootStackParamList = {
    Assessment: undefined;
};

type AssessmentProps = NativeStackScreenProps<RootStackParamList, 'Assessment'>;

const AssessmentScreen: React.FC<AssessmentProps> = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <ScrollView style={styles.AssessmentContainer}>
            {questionsModel.map(questionData => (
                <QuestionnaireComponent id={questionData.id} question={questionData.question} options={questionData.options}/>
            ))}
        </ScrollView>
    );
}

/**
 * 
        <View style={styles.AssessmentContainer}>
            <Text
                style={[
                    styles.AssessmentTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {'asdas'}
            </Text>
            <Text
                style={[
                    styles.AssessmentDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {'asdasd'}
            </Text>
        </View>
 */

const styles = StyleSheet.create({
    AssessmentContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    AssessmentTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    AssessmentDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default AssessmentScreen;