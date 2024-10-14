/**
 * Page: Result Screen 
 * Description:  
 * Users will see the final Result score.
 */

import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import TextGlobal from '../../components/ui/TextGlobal';
import InfoModal from './InfoModal';
import { RouteProp } from '@react-navigation/native';
import { ResultModel } from './ResultModel';
import { Card } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HeaderLogo from '../../components/headerLogo/HeaderLogo';
import { useTheme } from '@react-navigation/native';

type RootStackParamList = {
    Result: { results: { totalScore: number; riskProfileCategory: string } };
    Assessment: undefined;
};

type ResultProps = {
    route: RouteProp<RootStackParamList, 'Result'>;
    navigation: NativeStackNavigationProp<RootStackParamList, 'Result'>;
};

const ResultScreen: React.FC<ResultProps> = ({ route, navigation }) => {
    const {colors} = useTheme();
    const { totalScore, riskProfileCategory } = route.params.results;
    const [isInfoModalVisible, setInfoModalVisible] = React.useState(false);

    const showModal = () => setInfoModalVisible(true);
    const hideModal = () => setInfoModalVisible(false);

    return (
        <View style={styles.resultContainer}>
            <InfoModal isVisible={isInfoModalVisible} hideModal={hideModal} />
            <HeaderLogo />
            <TextGlobal
                variant="titleLarge"
                style={{ textAlign: 'center' }}
            >{ResultModel.description}
            </TextGlobal>
            <Card style={{ marginVertical: 20, bottom: -50, backgroundColor: colors.background}}>
                <Card.Content>
                    <View style={{ alignItems: 'center' }}>
                        <TextGlobal variant="titleLarge">{'Your Total Score: '}</TextGlobal>
                        <TextGlobal style={{fontWeight: 'bold'}} variant="titleLarge">{totalScore}</TextGlobal>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <TextGlobal variant="titleLarge">{'Your Risk Profile Category: '}</TextGlobal>
                        <View style={{ flexDirection: 'row' }}>
                            <TextGlobal style={{fontWeight: 'bold'}} variant="titleLarge">{riskProfileCategory}</TextGlobal>
                            {/* Information Icon */}
                            <TouchableOpacity onPress={() => showModal()} testID="info-icon">
                                <Image style={{ tintColor: 'blue', width: 30, height: 30, marginLeft: 3 }} source={require('../../assets/icon-info.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        paddingHorizontal: 30,
    },
});

export default ResultScreen;