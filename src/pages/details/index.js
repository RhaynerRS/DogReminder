import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Doggo from "../../assets/doggo.png";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { key } from "../../utils/api-key";

async function getPets(user,pet) {
  let reqs = await fetch(config.urlRootPhp + "GetPet.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: user,
      petId: pet,
    }),
  });
  let ress = await reqs.json();
  if (ress) {
    console.log(ress);
  } else {
    console.log('erro');
  }
}

export function Details({ route }) {
  const [breed, setBreed] = useState()
  useEffect(async () => {
    try {
      await fetch(`https://api-racas.herokuapp.com/?name=${route.params.breed}`).then((response) => response.json())
        .then((json) => route.params.breed!='SRD'?setBreed(json) : json);
    } catch (error) {
      console.log(error)
    }
  }, [])

  const navigation = useNavigation();

  function DetailsHandle() {
    navigation.navigate("Home");
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
        <Text style={styles.title}>{route.params.name}</Text>
        <Text style={styles.text}>{route.params.breed}</Text>
        <Text style={styles.title}>{route.params.weight} Kg</Text>
        <Text style={styles.title}>{route.params.birthdate} Years</Text>
        <Text style={styles.title}>{route.params.color}</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={[styles.title, { color: "#3048EA" }]}>{breed != undefined ? breed[0].life_span.replace(' years', '') : '...'}</Text>
          <Text style={[styles.text, { color: "#3048EA" }]}>Years</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.title, { color: "#3048EA" }]}>{breed != undefined ? breed[0].weight.metric : '...'}</Text>
          <Text style={[styles.text, { color: "#3048EA" }]}>Kilos</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.title, { color: "#3048EA" }]}>{breed != undefined ? breed[0].height.metric : '...'}</Text>
          <Text style={[styles.text, { color: "#3048EA" }]}>CM</Text>
        </View>
      </View>
    </View>
  );
}
