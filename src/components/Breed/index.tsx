import { Image, Text, TextInputProps,View} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import Doggo from "../../assets/doggo.png";
import Paw from "../../assets/paw.png";

type Props = {
  breedName: string;
  breedImage: string;
};

export function Breed({ breedName,breedImage, ...rest }: Props) {
  return (
    <View style={styles.breed} >
        <Image source={{uri:breedImage}||Doggo} style={styles.image} resizeMode="stretch" />
        <Text  style={styles.title}>{breedName}</Text>
    </View>
  );
}
