import React from 'react';
import {Text} from 'react-native';
import  {styles}  from './style';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

type Props= RectButtonProps &{
    title: string,
}
export function Button({title, ...rest}:Props){
    return (
        <RectButton style={styles.container} {...rest}>
                <Text style={styles.title}>
                    {title}
                </Text>
        </RectButton>
        
    );
}