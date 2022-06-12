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
import { Breed } from "../../components/Breed";

export function AllBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(async () => {
    try {
      await fetch(`https://api-racas.herokuapp.com/`).then((response) => response.json())
        .then((json) => {setBreeds(json)})
    } catch (error) {
      console.log(error)
    }
  }, [])
  const navigation = useNavigation();

  function HomeHandle() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
        <View
          style={{
            width: '100%',
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ marginRight: 35, color: "#EF6C6A" }} onPress={() =>HomeHandle()}>
          {"<<"} Back to Home
          </Text>
          <Text style={[styles.titles, { color: "#3048EA" }]}>All Breeds</Text>
        </View>
        <ScrollView

          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center',justifyContent: 'center',marginBottom: 90}}
        >
              {breeds.map((breed,index)=><Breed key={index} breedName={breed.name}/>)}
        </ScrollView>
    </View>
  );
}
