import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Home } from "../../pages/home/index";
import { Form } from "../../pages/form/index";
import { SignIn } from "../../pages/signin";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPaw,
  faShop,
  faBowlFood,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { styles } from "./styles";
import { RectButton, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";

const Tab = createBottomTabNavigator();
var color = "#d5d5d5";

type Props = {
  tab: any;
};

export function Tabs({tab}:Props) {
  const[focus,setFocus]=useState('paw')
  function changeTab(event:string) {
    setFocus(event)
    tab(event)
  }

  return (
    <View style={styles.tabs}>
      <TouchableWithoutFeedback style={styles.button} onPress={()=>{changeTab('paw')}}>
        <FontAwesomeIcon
          icon={faPaw}
          size={35}
          style={{ color: focus == 'paw' ? "#3048EA" : "#c5c5c9" }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={styles.button} onPress={()=>{changeTab('dog')}}>
        <FontAwesomeIcon
          icon={faDog}
          size={35}
          style={{ color: focus=='dog' ? "#3048EA" : "#c5c5c9" }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={styles.button} onPress={()=>{changeTab('food')}}>
        <FontAwesomeIcon
          icon={faBowlFood}
          size={35}
          style={{ color: focus == "food" ? "#3048EA" : "#c5c5c9" }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
