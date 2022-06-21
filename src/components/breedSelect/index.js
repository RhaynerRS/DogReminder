import { ScrollView } from "react-native";
import { styles } from "./styles";
import { Pet } from "../Pet";
import FunSvg from "../../assets/fun.svg";
import { useEffect, useState } from "react";
import {Breed} from '../Breed'
const config = require("../../../config/config.json");



export function BreedSelect() {
  const [firstBreeds,setFirstBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);

  useEffect(async () => {
    try {
      await fetch(`https://api-racas.herokuapp.com/`).then((response) => response.json())
        .then((json) => {setBreeds((json.sort(() => Math.random() - 0.5)).splice(0,5))})
    } catch (error) {
      console.log(error)
    }
  }, []) 
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center',justifyContent: 'center',marginBottom: 90}}
    >
          {breeds.map((breed,index)=><Breed key={index} breedImage={breed.image.url} breedName={breed.name}/>)}
    </ScrollView>
  );
}
