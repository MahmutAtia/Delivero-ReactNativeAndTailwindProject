import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResScreen from './screens/resScreen';
import store from "./store"
import { Provider } from 'react-redux'
import BasketScreen from './screens/BasketScreen';

const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ResScreen" component={ResScreen} />
        <Stack.Screen options={{headerShown:false ,
        presentation :'card'}}
         name="BasketScreen" component={BasketScreen} />


      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
