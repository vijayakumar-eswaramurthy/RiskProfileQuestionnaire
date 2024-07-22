/**
 * Page: Result Screen 
 * Description:  
 * Users will see the final Result score.
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
import { ResultModel } from './ResultModel';
import { Button } from 'react-native-paper';

type RootStackParamList = {
    Result: undefined;
    Assessment: undefined;
};

type ResultProps = NativeStackScreenProps<RootStackParamList, 'Result'>;

const ResultScreen: React.FC<ResultProps> = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.ResultContainer}>
            <Text
                style={[
                    styles.ResultTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {ResultModel.pageTitle}
            </Text>
            <Text
                style={[
                    styles.ResultDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {ResultModel.description}
            </Text>
            <Button
                onPress={() => navigation.navigate('Assessment')}
            >Go to Assessment</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    ResultContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    ResultTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    ResultDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default ResultScreen;