import React, { useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import Doggo from "../../assets/doggo.png";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faGear,
  faWeightScale,
  faRuler,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export function Details() {
  const navigation = useNavigation();

  function DetailsHandle() {
    navigation.navigate("Home" as never);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backBut} onPress={DetailsHandle}>
          {"<"} my pets
        </Text>
        <View style={styles.config}>
          <FontAwesomeIcon icon={faGear} size={25} style={{ color: "#fff" }} />
        </View>
      </View>
      <View style={styles.panel}>
        <Image source={Doggo} style={styles.image} resizeMode="stretch" />
        <Text style={styles.title}>Sansão</Text>
        <Text style={styles.text}>Shih-Tzu</Text>
        <Text style={styles.title}>19%</Text>
        <Text style={styles.title}>86%</Text>
        <Text style={styles.title}>36 min</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={[styles.title, { color: "#3048EA" }]}>10-18</Text>
          <Text style={[styles.text, { color: "#3048EA" }]}>Years</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.title, { color: "#3048EA" }]}>4-7</Text>
          <Text style={[styles.text, { color: "#3048EA" }]}>Kilos</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.title, { color: "#3048EA" }]}>20-28</Text>
          <Text style={[styles.text, { color: "#3048EA" }]}>CM</Text>
        </View>
      </View>
    </View>
  );
}
