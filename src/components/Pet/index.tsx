import { View, Text, Image} from "react-native";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";
import React from "react";
import Doggo from "../../assets/dog_template.png";
import Catto from "../../assets/cat_template.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import{useWindowDimensions} from "react-native";
import {
  faPaw,
  faShop,
  faBowlFood,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

type Props = RectButtonProps & {
  name: string;
  breed: string;
  icon: React.FC<SvgProps>;
  end: any;
  petid:number;
  weight:number;
  birthdate: number;
  color: string;
  type: string;
};

export function Pet({ name, breed, icon: Icon, end,petid,weight,birthdate,color,type, ...rest }: Props) {
  const size=useWindowDimensions().height*.2232142857142857;
  const navigation = useNavigation();

  function PetHandle() {
    navigation.navigate("Details" as never,{name,breed,petid,weight,birthdate,color,type} as never)
  }
  console.log(type);
  return (
    <RectButton {...rest} style={{ marginLeft: 12, borderRadius: 25 }} onPress={PetHandle}>
      <LinearGradient
        colors={["#fff", "#3048EA"]}
        start={{ x: 0, y: 0 }}
        end={end}
        style={[styles.container,{width:size,height:size}]}
      >
        <FontAwesomeIcon
          icon={faPaw}
          size={150}
          style={{ color: "#F5F5F5", position: "absolute" }}
        />
        <View style={styles.content}>
          <Image source={type=='Dog'?Doggo:Catto} style={type=='Dog'?styles.dog:styles.cat} resizeMode="stretch" />
          <View style={styles.data}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.breed}>{breed}</Text>
          </View>
        </View>
      </LinearGradient>
    </RectButton>
  );
}
