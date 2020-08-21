import React , { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Home from './app/screens/Home';
import Login from './app/screens/Login';


const Stack = createStackNavigator();

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const getAccessToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@AccessToken')
      if(value !== null) {
        // value previously stored
        setLogin(true);
      } else {
        setLogin(false);
      }
    } catch(e) {
      // error reading value
    }
  }

  useEffect(async () => {
    setLoading(true);
    await getAccessToken();
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="red"/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? <Stack.Screen name="Home" component={Home} /> : <Stack.Screen name="Login" component={Login} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;