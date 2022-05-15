import { View ,Text,Image} from "react-native"
import { RectButtonProps,RectButton } from "react-native-gesture-handler"
import { styles } from "./styles"
import {SvgProps} from 'react-native-svg'
import React from "react"
import Doggo from '../../assets/doggo.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaw, faShop,faBowlFood,faDog} from '@fortawesome/free-solid-svg-icons'
import {LinearGradient} from 'expo-linear-gradient'

type Props =RectButtonProps & {
    name: string;
    breed: string;
    icon: React.FC<SvgProps>;
}

export function Pet({name,breed,icon:Icon,...rest}:Props){
    return (
        <RectButton {...rest} style={{marginLeft:12,borderRadius:25}}>
            <View style={styles.container} >
                <FontAwesomeIcon icon={ faPaw } size={170} style={{color: '#F5F5F5',position: 'absolute'}}/>
                <View style={styles.content}>
                    <Image source={Doggo} style={styles.image} resizeMode="stretch"/>
                    <View style={styles.data}>
                        <Text style={styles.title}>
                            {name}
                        </Text>
                        <Text style={styles.breed}>
                            {breed}
                        </Text>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}