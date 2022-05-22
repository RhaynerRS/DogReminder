import { View, Text, Image } from "react-native";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";
import React from "react";
import Doggo from "../../assets/doggo.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
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
};

export function Pet({ name, breed, icon: Icon, end, ...rest }: Props) {
  const navigation = useNavigation();

  function PetHandle() {
    navigation.navigate("Details" as never);
  }

  return (
    <RectButton {...rest} style={{ marginLeft: 12, borderRadius: 25 }} onPress={PetHandle}>
      <LinearGradient
        colors={["#fff", "#3048EA"]}
        start={{ x: 0, y: 0 }}
        end={end}
        style={styles.container}
      >
        <FontAwesomeIcon
          icon={faPaw}
          size={150}
          style={{ color: "#F5F5F5", position: "absolute" }}
        />
        <View style={styles.content}>
          <Image source={Doggo} style={styles.image} resizeMode="stretch" />
          <View style={styles.data}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.breed}>{breed}</Text>
          </View>
        </View>
      </LinearGradient>
    </RectButton>
  );
}
