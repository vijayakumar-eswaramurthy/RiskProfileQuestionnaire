/**
 * Component : TextGlobal
 * Description: 
 *  This is a pure, reusable component. 
 *  Using React.memo for performance optimization.
 */

import React from 'react';
import { Text as PaperText, TextProps } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

// Define the props for the TextGlobal component, extending the TextProps from react-native-paper
interface TextGlobalProps extends TextProps<any> {
  // add any additional props if required to pass to the Text component here
}

const TextGlobal: React.FC<TextGlobalProps> = React.memo(({ children, style, ...rest }) => {
  const { colors } = useTheme();
  const combinedStyle = StyleSheet.flatten([{ color: colors.text }, style]);

  return <PaperText {...rest} style={combinedStyle}>{children}</PaperText>;
});

export default TextGlobal;
