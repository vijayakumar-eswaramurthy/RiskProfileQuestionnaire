/**
 * Component : ButtonGlobal
 * Description: 
 *  This is a pure, reusable component. 
 *  Using React.memo for performance optimization. 
 */
import React from 'react';
import { Button as PaperButton, ButtonProps } from 'react-native-paper';

// Define the props for the ButtonGlobal component, extending the ButtonProps from react-native-paper
interface ButtonGlobalProps extends ButtonProps {
  // add any additional props if required to pass to the Button component here
}

const ButtonGlobal: React.FC<ButtonGlobalProps> = React.memo(({ children, ...rest }) => {
  return <PaperButton {...rest}>{children}</PaperButton>;
});

export default ButtonGlobal;
