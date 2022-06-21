import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Doggo from "../../assets/dog_details_template.png";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Tabs } from "../../components/tabs";
async function getPets(user, pet) {
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
  const [feed,setFeed]=useState('. . .')
  const [water,setWater]=useState('. . .')
  function calcRacao(weight) {
    weight = parseInt(weight)
    if (weight <= 3) {
      setFeed(((weight * .07)*1000).toFixed())
    } else if (weight > 3 && weight <= 5) {
      setFeed(((weight * .055)*1000).toFixed())
    } else if (weight > 5 && weight <= 22) {
      setFeed(((weight * .045)*1000).toFixed())
    } else if (weight > 22 && weight <= 40) {
      setFeed(((weight * .04)*1000).toFixed())
    } else {
      setFeed(((weight * .0375)*1000).toFixed())
    }
  }
  function calcWater(weight) {
    weight = parseInt(weight)
    setWater(((weight*2)*30).toFixed())
  }
  const [tab, setTab] = useState('paw')
  function tabChange(event) {
    setTab(event)
  }
  const [breed, setBreed] = useState()
  useEffect(async () => {
      await fetch(`https://api-racas.herokuapp.com/?name=${route.params.breed}`).then((response) => response.json())
        .then((json) => route.params.breed != 'SRD' ? setBreed(json) : json).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
          });
    calcRacao(route.params.weight)
    calcWater(route.params.weight)
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
      {
        tab == 'paw' ?
          <View style={styles.info}>
            <View style={styles.infoItem}>
              <Text style={[styles.title, { color: "#3048EA" }]}>{breed != undefined ? breed[0].life_span.replace(' years', '') : '...'}</Text>
              <Text style={[styles.text, { color: "#3048EA" }]}>Years</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={[styles.title, { color: "#3048EA" }]}>{breed != undefined ? breed[0].weight.metric : '...'}</Text>
              <Text style={[styles.text, { color: "#3048EA" }]}>Kg</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={[styles.title, { color: "#3048EA" }]}>{breed != undefined ? breed[0].height.metric : '...'}</Text>
              <Text style={[styles.text, { color: "#3048EA" }]}>CM</Text>
            </View>
          </View>
          :
          tab == 'dog' ?
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <Text style={[styles.title, { color: "#3048EA" }]}>{breed != undefined ? breed[0].life_span.replace(' years', '') : '...'}</Text>
                <Text style={[styles.text, { color: "#3048EA" }]}>Years</Text>
              </View>
            </View>
            :
            <View style={styles.info}>
              <View style={styles.infoItem}>
              <Text style={[styles.title, { color: "#3048EA" }]}>{feed}</Text>
                <Text style={[styles.text, { color: "#3048EA" }]}>Gr/Day</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={[styles.title, { color: "#3048EA" }]}>{water}</Text>
                <Text style={[styles.text, { color: "#3048EA" }]}>Ml/Day</Text>
              </View>
            </View>
      }
      <Tabs tab={event => tabChange(event)}></Tabs>
    </View>
  );
}
