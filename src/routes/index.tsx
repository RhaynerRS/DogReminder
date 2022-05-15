import {NavigationContainer} from '@react-navigation/native';
import { Tabs } from '../components/tabs';
import {useRoute} from '@react-navigation/native';



import { AuthRoutes } from './auth.routes';

export function Routes(){

    return(
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
    )
}