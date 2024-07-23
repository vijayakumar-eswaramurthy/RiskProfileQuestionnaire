/**
 * Component : TextGlobal
 * Description: 
 *  This is a pure, reusable component. 
 *  Using React.memo for performance optimization.
 */

import React from 'react';
import { Text as PaperText, TextProps } from 'react-native-paper';

// Define the props for the TextGlobal component, extending the TextProps from react-native-paper
interface TextGlobalProps extends TextProps<any> {
  // add any additional props if required to pass to the Text component here
}

const TextGlobal: React.FC<TextGlobalProps> = React.memo(({ children, ...rest }) => {
  return <PaperText {...rest}>{children}</PaperText>;
});

export default TextGlobal;