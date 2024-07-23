/**
 * Page: Home Screen 
 * Description: 
 *  User land on this page after app launch.
 *  Show welcome message and instructions to proceed usage with the app. 
 */

import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TextGlobal from '../../components/ui/TextGlobal';
import ButtonGlobal from '../../components/ui/ButtonGlobal';
import { HomeScreenModel } from './HomeScreenModel';
import HeaderLogo from '../../components/headerLogo/HeaderLogo';

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
            <HeaderLogo />
            <TextGlobal
                variant="titleLarge"
                style={{ textAlign: 'center', marginVertical: 20 }}>
                {HomeScreenModel.description}
            </TextGlobal>
            <View style={{position: 'absolute', bottom: 90}}>
                <TextGlobal
                    variant="titleSmall"
                    style={{ marginBottom: 5 }}>
                    {HomeScreenModel.guideText}
                </TextGlobal>
                <ButtonGlobal mode="contained" onPress={handleButtonPress}>{HomeScreenModel.buttonLabel}</ButtonGlobal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
    },
});

export default HomeScreen;