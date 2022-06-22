import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { styles } from "./style";
import { SmallInput } from "../../components/input/index";
import { Button } from "../../components/button/index";
import { ButtonGoogle } from "../../components/ButtonGoogle/index";
import { ButtonApple } from "../../components/ButtonApple/index";
import { useNavigation } from "@react-navigation/native";
const config = require("../../../config/config.json");

export function EditPet() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const navigation = useNavigation();

  function SignInHandle() {
    navigation.navigate("Home" as never);
  }

  async function doLogin() {
    let reqs = await fetch(config.urlRootPhp + "Controller.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameUser: "login",
        passwordUser: "123",
      }),
    });
    let ress = await reqs.json();
    if (ress) {
      navigation.navigate("Home" as never);
    } else {
      setMessage("Error! Login ou Senha incorreto!" as never);
      setTimeout(() => {
        setMessage(null as never);
      }, 3000);
    }
  }
  return (
    <View style={styles.container}>
    </View>
  );
}
