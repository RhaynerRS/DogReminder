import { View, Text, Image } from "react-native";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";
import React from "react";
import Doggo from "../../assets/dog_template.png";
import Catto from "../../assets/cat_template.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPaw,
  faPlus,
  faBowlFood,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import{useWindowDimensions} from "react-native";

export function AddPet() {
  const navigation = useNavigation();
  const size=useWindowDimensions().height*.2232142857142857;
  function PetHandle() {
    navigation.navigate("Details" as never);
  }
  return (
    <RectButton
      style={{ marginLeft: 12, borderRadius: 25 }}
      onPress={PetHandle}
    >
      <LinearGradient
        colors={["#fff", "#3048EA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.3, y: -0.8 }}
        style={[styles.container,{width:size,height:size}]}
      >
        <FontAwesomeIcon
          icon={faPaw}
          size={size*.75}
          style={{ color: "#F5F5F5", position: "absolute" }}
        />
        <View style={styles.content}>
          <FontAwesomeIcon
            icon={faPlus}
            size={size*.5}
            style={{ color: "#3048EA"}}
          />
          <View style={styles.data}>
            <Text style={styles.title}>Adicionar Pet</Text>
            <Text style={styles.breed}> </Text>
          </View>
        </View>
      </LinearGradient>
    </RectButton>
  );
}
