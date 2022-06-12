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
        .then((json) => {setBreeds(json)}).then(()=>{
          setBreeds(breeds.sort(() => Math.random() - 0.5))
          setFirstBreeds(breeds.slice(0, 5))
        })
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(breeds)
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center',justifyContent: 'center',marginBottom: 90}}
    >
          {firstBreeds.map((breed,index)=><Breed key={index} breedName={breed.name}/>)}
    </ScrollView>
  );
}
