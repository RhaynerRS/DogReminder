import React from "react";
import Doggo from "../../assets/doggo.png";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { Button } from "../../components/button/index";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation();

  function SignInHandle() {
    navigation.navigate("Home" as never);
  }

  return (
    <View style={styles.container}>
      <Image source={Doggo} style={styles.image} resizeMode="stretch" />
      <>
        <Text style={styles.title}>Seja bem vindo ao DogReminder!</Text>
        <Text style={styles.text}>Seja bem vindo ao DogReminder!</Text>
      </>
      <Button title="Entrar Agora" onPress={SignInHandle} />
    </View>
  );
}
