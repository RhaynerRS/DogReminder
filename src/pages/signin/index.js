import React, { useEffect, useState } from "react";
import Doggo from "../../assets/doggo.png";
import { AsyncStorage, Image, Text, View, useWindowDimensions} from "react-native";
import { styles } from "./style";
import { Button } from "../../components/button/index";
import { useNavigation } from "@react-navigation/native";

export function SignIn() { 
  const navigation = useNavigation();
  const size=useWindowDimensions().height*.45;
  function SignInHandle() {
    navigation.navigate("Form");
  }

  return (
    <View style={styles.container}>
      <Image source={Doggo} style={{resizeMode: "contain",height: size ,width: size*.75,transform: [{ translateY:size*.1}],}} resizeMode="stretch" />
      <>
        <Text style={styles.title}>Seja bem vindo ao repaws!</Text>
        <Text style={styles.text}>O lugar para você aprender tudo sobre seu melhor amigo</Text>
      </>
      <Button title="Entrar Agora" onPress={SignInHandle} />
    </View>
  );
}
