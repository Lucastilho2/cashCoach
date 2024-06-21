import { Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./views/HomeScreen"
import LoginScreen from "./views/LoginScreen";
import CadastrarScreen from "./views/CadastrarScreen";
import SobreScreen from "./views/SobreScreen";
import NegocioScreen from "./views/NegocioScreen";

const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={HomeScreen} 
                    options={{
                        headerStyle: {
                            backgroundColor: "yellow"
                        },
                        headerTitleAlign: "center",
                        drawerStyle: {
                            backgroundColor: "yellow"
                        }
                    }}
                />
                <Drawer.Screen name="Login" component={LoginScreen} 
                options={{
                    headerStyle: {
                        backgroundColor: "yellow"
                    },
                    headerTitleAlign: "center",
                    drawerStyle: {
                        backgroundColor: "yellow"
                    }
                }}
                />
                <Drawer.Screen name="Cadastro" component={CadastrarScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "yellow"
                    },
                    headerTitleAlign: "center",
                    drawerStyle: {
                        backgroundColor: "yellow"
                    }
                }}  
                />
                <Drawer.Screen name="Sobre" component={SobreScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "yellow"
                    },
                    headerTitleAlign: "center",
                    drawerStyle: {
                        backgroundColor: "yellow"
                    }
                }}
                 />
                <Drawer.Screen name="SeuNegocio" component={NegocioScreen}
                options={{
                    headerStyle: {
                        backgroundColor: "yellow"
                    },
                    headerTitleAlign: "center",
                    drawerStyle: {
                        backgroundColor: "yellow"
                    }
                }}
                 />
            </Drawer.Navigator>
        </NavigationContainer>
        
    )
}



export default App