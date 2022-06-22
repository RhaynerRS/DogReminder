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

export function AddPet() {
  const navigation = useNavigation();

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
        style={styles.container}
      >
        <FontAwesomeIcon
          icon={faPaw}
          size={150}
          style={{ color: "#F5F5F5", position: "absolute" }}
        />
        <View style={styles.content}>
          <FontAwesomeIcon
            icon={faPlus}
            size={100}
            style={{ color: "#3048EA" ,transform: [{ translateY:30}]}}
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
