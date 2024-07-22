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
    View,
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {AssessmentModel} from './AssessmentModel';

type RootStackParamList = {
    Assessment: undefined;
};

type AssessmentProps = NativeStackScreenProps<RootStackParamList, 'Assessment'>;

const AssessmentScreen: React.FC<AssessmentProps> = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.AssessmentContainer}>
            <Text
                style={[
                    styles.AssessmentTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {AssessmentModel.pageTitle}
            </Text>
            <Text
                style={[
                    styles.AssessmentDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {AssessmentModel.description}
            </Text>
        </View>
    );
}

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