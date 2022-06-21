import React, { useEffect, useState } from "react";
import Doggo from "../../assets/doggo.png";
import { AsyncStorage, Image, Text, View } from "react-native";
import { styles } from "./style";
import { Button } from "../../components/button/index";
import { useNavigation } from "@react-navigation/native";

export function SignIn() { 
  const navigation = useNavigation();

  function SignInHandle() {
    navigation.navigate("Form");
  }

  return (
    <View style={styles.container}>
      <Image source={Doggo} style={styles.image} resizeMode="stretch" />
      <>
        <Text style={styles.title}>Seja bem vindo ao DogReminder!</Text>
        <Text style={styles.text}>O lugar para você aprender tudo sobre seu melhor amigo</Text>
      </>
      <Button title="Entrar Agora" onPress={SignInHandle} />
    </View>
  );
}
