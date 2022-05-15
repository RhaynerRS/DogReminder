import { TextInput,TextInputProps} from "react-native"
import { styles } from "./style"

export function SmallInput({placeholder,...rest}:TextInputProps){
    return(
        <TextInput style={styles.container}  {...rest} placeholder={placeholder} placeholderTextColor='#d5d5d5'/>
    )
}