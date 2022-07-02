import React, { useState } from "react";
import Login from "../../assets/login_screen.png";
import { Image, useWindowDimensions, Text, View } from "react-native";
import { styles } from "./style";
import { SmallInput } from "../../components/input/index";
import { Button } from "../../components/button/index";
import { ButtonGoogle } from "../../components/ButtonGoogle/index";
import { useNavigation } from "@react-navigation/native";
const config = require("../../../config/config.json");

export function Form() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const navigation = useNavigation();
  const size=useWindowDimensions().height*.33;
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
      <Image source={Login} style={{resizeMode: "contain",height: size*.75 ,width: size,transform: [{ translateY:size*.1}],}} resizeMode="stretch" />
      <Text style={styles.title}>Login</Text>
      <View style={styles.buttons}>
        <SmallInput
          placeholder="E-mail"
          onChangeText={(text) => setUser(text as never)}
        />
        <SmallInput
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text as never)}
        />
        <Text style={{ color: "red" }}>{message}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Login" onPress={doLogin} />
        <Text style={{fontFamily:"Poppins_400Regular"}}>Or</Text>
        <ButtonGoogle title="Login with Google"/>
        <View style={styles.inline}>
          <Text  style={{fontFamily:"Poppins_400Regular"}}>Don't have a account?</Text>
          <Text style={{ color: "blue",fontFamily:"Poppins_400Regular" }}>SignUp</Text>
        </View>
      </View>
    </View>
  );
}
