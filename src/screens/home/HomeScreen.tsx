/**
 * Page: Home Screen 
 * Description: User land on this page after app launch. Show welcome message and instructions to proceed usage with the app. 
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextGlobal from '../../components/ui/TextGlobal';
import ButtonGlobal from '../../components/ui/ButtonGlobal';
import { HomeScreenModel } from './HomeScreenModel';

type RootStackParamList = {
    Home: undefined;
    Assessment: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
    const handleButtonPress = () => {
        console.log('Start Button pressed!');
        navigation.navigate('Assessment');
    };
    return (
        <View style={styles.homeContainer}>
            <TextGlobal
                style={styles.homeTitle}>
                {HomeScreenModel.pageTitle}
            </TextGlobal>
            <TextGlobal
                style={
                    styles.homeDescription
                }>
                {HomeScreenModel.description}
            </TextGlobal>
            <TextGlobal
                style={
                    styles.homeDescription
                }>
                {HomeScreenModel.guideText}
            </TextGlobal>
            <ButtonGlobal label="Start" onPress={handleButtonPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeTitle: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: 'red'
    },
    homeDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'grey'
    },
});

export default HomeScreen;