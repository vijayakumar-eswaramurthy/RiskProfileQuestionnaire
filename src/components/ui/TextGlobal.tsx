import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

type Props = TextProps & {
  children: React.ReactNode;
  style?: TextStyle;
};

const TextGlobal: React.FC<Props> = ({ children, style }) => {
  const { colors } = useTheme();

  return (
    <Text style={[{ color: colors.text }, style]}>
      {children}
    </Text>
  );
};

export default TextGlobal;
