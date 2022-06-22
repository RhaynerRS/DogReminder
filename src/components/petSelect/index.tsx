import { ScrollView } from "react-native";
import { styles } from "./styles";
import { Pet } from "../Pet";
import FunSvg from "../../assets/fun.svg";
import { useEffect, useState } from "react";
import { AddPet } from "../AddPet";
const config = require("../../../config/config.json");

type Props = {
  end: any;
};

export function PetSelect({ end }: Props) {
  const [pets,setPets]= useState([]);
  
  useEffect(async () => {
    let reqs = await fetch(config.urlRootPhp + "GetPet.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 0,
      }),
    });
    let ress = await reqs.json();
    if (ress) {
      setPets(ress);
    } else {
      console.log('erro');
    }
  },[])

  function getAge(dateString) 
  {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      return age
  }


  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {pets.map(
        (pet) => (
          (
            <Pet
              petid={pet.pet_id}
              end={end}
              type={pet.pet_type}
              key={pet.pet_id}
              name={pet.pet_name}
              breed={pet.breed}
              weight={pet.weigth}
              birthdate={getAge(pet.birthdate)}
              color={pet.color}
              icon={FunSvg}
            ></Pet>
          )
        )
      )}
      <AddPet/>
    </ScrollView>
  );
}
