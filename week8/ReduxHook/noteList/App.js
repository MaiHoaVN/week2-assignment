import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NoteList from './app/screens/NoteList';
import AddNote from './app/screens/AddNote';
import store from './app/store';

const Stack = createStackNavigator();

function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="NoteList" component={NoteList} options={{ title: 'Note List' }}/>
            <Stack.Screen name="AddNote" component={AddNote} options={{ title: 'Add Note' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      
  );
}


export default App;