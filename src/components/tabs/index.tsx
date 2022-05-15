import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View,ScrollView } from 'react-native';
import { Home } from '../../pages/home/index';
import { Form } from '../../pages/form/index';
import { SignIn } from '../../pages/signin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaw, faShop,faBowlFood,faDog} from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();
var color='#d5d5d5';


export function Tabs(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom:0,
                    elevation: 0,
                    backgroundColor: '#fff',
                    height: 100,
                    borderColor: '#fff',
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={{alignItems: 'center',justifyContent:'center',top:5}} >
                            <FontAwesomeIcon icon={ faPaw } size={35} style={{color: focused ? '#3A9AF3' : '#7C7B82'}}/>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Form" 
                component={Form} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={{alignItems: 'center',justifyContent:'center',top:5}} >
                            <FontAwesomeIcon icon={ faDog } size={35} style={{color: focused ? '#49A26B' : '#BECBC0'}}/>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={{alignItems: 'center',justifyContent:'center',top:5}} >
                            <FontAwesomeIcon icon={ faShop } size={35} style={{color: focused ? '#49A26B' : '#BECBC0'}}/>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}