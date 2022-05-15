import { ScrollView} from "react-native"
import { styles } from "./styles"
import {pets} from '../../utils/pets'
import {Pet} from '../Pet'
import FunSvg from '../../assets/fun.svg'

export function PetSelect(){
    return(
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight:40}}>
            {
                pets.map(pet=>(
                    console.log(pet.name),
                    <Pet key={pet.id} name={pet.name} breed={pet.breed} icon={FunSvg}></Pet>
                ))
            }
        </ScrollView>
    )
}