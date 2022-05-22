import { ScrollView } from "react-native";
import { styles } from "./styles";
import { pets } from "../../utils/pets";
import { Pet } from "../Pet";
import FunSvg from "../../assets/fun.svg";

type Props = {
  end: any;
};

export function PetSelect({ end }: Props) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {pets.map(
        (pet) => (
          console.log(pet.name),
          (
            <Pet
              end={end}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              icon={FunSvg}
            ></Pet>
          )
        )
      )}
    </ScrollView>
  );
}
