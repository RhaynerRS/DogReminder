import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/home/index";
import { Form } from "../pages/form/index";
import { SignIn } from "../pages/signin";
import { Details } from "../pages/details";
import { AllBreeds } from "../pages/allBreeds";
import { Tabs } from "../components/tabs";
import { EditPet } from "../pages/EditPet";

const Stack = createStackNavigator();

export function AuthRoutes() {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name={"SignIn"} component={SignIn} />
      <Stack.Screen name={"Form"} component={Form} />
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"Details"} component={Details} />
      <Stack.Screen name={"AllBreeds"} component={AllBreeds} />
      <Stack.Screen name={"Tabs"} component={Tabs} />
      <Stack.Screen name={"EditPet"} component={EditPet} />
    </Stack.Navigator>
  );
}
