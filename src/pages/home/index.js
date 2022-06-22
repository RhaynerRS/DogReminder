import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPaw,
  faShop,
  faBowlFood,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { PetSelect } from "../../components/petSelect";
import { BreedSelect } from "../../components/breedSelect";

export function Home() {

  const [category, setCategory] = useState("");
  function handleCategorySelect(categoryId) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }
  const navigation = useNavigation();

  function SignInHandle() {
    navigation.navigate("Form");
  }

  function AllBreedsHandle() {
    navigation.navigate("AllBreeds");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faPaw} size={35} style={{ color: "#fff" }} />
      </View>
      <View>
        <Text style={styles.titles}>My pets</Text>
        <PetSelect end={{ x: 0.3, y: -0.8 }}></PetSelect>
      </View>
      <View style={styles.content}>
        <View
          style={{
            width: '100%',
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[styles.titles, { color: "#3048EA" }]}>Explore</Text>
          <Text style={{ marginRight: 35, color: "#ff564f" }} onPress={() =>AllBreedsHandle()}>
            Show All {">>"}
          </Text>
        </View>
        <BreedSelect/>
      </View>
    </View>
  );
}
