import React from 'react';
import { View } from 'react-native';
import TextGlobal from '../ui/TextGlobal';

const HeaderLogo = () => {
    return (
        <View style={{ position: 'absolute', top: 0 }}>
            <TextGlobal
                variant="headlineLarge">
                {'Risk Profiler'}
            </TextGlobal>
        </View>
    )
}

export default HeaderLogo;