import * as React from 'react';
import { Button } from 'react-native-paper';

interface ButtonGlobalProps {
  label: string;
  onPress: () => void;
}

const ButtonGlobal: React.FC<ButtonGlobalProps> = ({ label, onPress }) => {
  return (
    <Button style={{margin:10}} mode="contained" onPress={onPress}>
      {label}
    </Button>
  );
};


export default ButtonGlobal;
