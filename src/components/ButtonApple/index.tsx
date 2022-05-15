import {Text,Image,View} from 'react-native';
import { styles } from './style';
import Apple from '../../assets/apple.png'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type Props= RectButtonProps &{
    title: string,
}

export function ButtonApple({title, ...rest}:Props){
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={Apple} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
        
    );
}