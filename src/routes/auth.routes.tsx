import {createStackNavigator} from '@react-navigation/stack'
import { Home } from '../pages/home/index';
import { Form } from '../pages/form/index';
import { SignIn } from '../pages/signin';
import { Tabs } from '../components/tabs';

const Stack=createStackNavigator();

export function AuthRoutes(){
    
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            cardStyle:{ backgroundColor:'#fff'}
        }}>
            <Stack.Screen name={"SignIn"} component={SignIn} />
            <Stack.Screen name={"Form"} component={Form} />
            <Stack.Screen name={"Home"} component={Home} />
        </Stack.Navigator>
    )
}