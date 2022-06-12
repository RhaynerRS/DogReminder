import { Text, Image, View } from "react-native";
import { styles } from "./styles";
import Google from "../../assets/google.png";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps & {
  title: string;
};

export function ButtonGoogle({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Google} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
