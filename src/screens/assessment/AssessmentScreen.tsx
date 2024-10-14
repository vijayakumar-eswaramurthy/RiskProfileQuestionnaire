/**
 * Page: Assessment Screen 
 * Description:  
 * Users will see list of questions with multiple choice answers. 
 * User can navigate between questions. 
 * User can submit and navigate to Results screen.
 */

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import QuestionnaireComponent from '../../components/QuestionnaireComponent/QuestionnaireComponent';
import { questionsModel } from './AssessmentModel';
import HeaderLogo from '../../components/headerLogo/HeaderLogo';

type RootStackParamList = {
    Assessment: undefined;
    Result: { results: { totalScore: number; riskProfileCategory: string } };
};

type AssessmentProps = {
    route: RouteProp<RootStackParamList, 'Assessment'>;
    navigation: NativeStackNavigationProp<RootStackParamList, 'Assessment'>;
};

const AssessmentScreen: React.FC<AssessmentProps> = ({ route, navigation }) => {
    const onCompleted = (results: { totalScore: number; riskProfileCategory: string }) => {
        // Navigate to Results Screen with results
        navigation.navigate('Result', { results });
    }

    return (
        <View testID='assessment-container' style={styles.AssessmentContainer}>
            <HeaderLogo/>
            <QuestionnaireComponent questions={questionsModel} onCompleted={onCompleted} />
        </View>
    );
}

const styles = StyleSheet.create({
    AssessmentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        paddingHorizontal: 30,
    },
});

export default AssessmentScreen;