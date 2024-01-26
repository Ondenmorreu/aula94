import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importação das telas 
import HomeScreen from "./screens/Home";
import MapScreen from "./screens/Map";
import CollectiblesScreen from "./screens/Collectibles";
import CheatCodesScreen from "./screens/CheatCodes";


//Criação da função createStackNavigator dentro de uma constante: Stack
const Stack=createStackNavigator();

export default function App() {
  return (
    //Chamada do componente NavigationContainer e dentro dele, chamada das telas
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Map" component={MapScreen}/>
        <Stack.Screen name="Collectibles" component={CollectiblesScreen}/>
        <Stack.Screen name="CheatCodes" component={CheatCodesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
