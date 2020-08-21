import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native';

export default function Home({ navigation }) {
    const [userName, setUserName] = useState('');
    const goChat = () => {
        navigation.navigate('Chat', {
            userName
        })
    }

    return (
        <SafeAreaView style={styles.container}>
        <Text>Enter your name</Text>
        <TextInput style={styles.input} onChangeText={text => setUserName(text)}/>
        <Button title='Go to chat' color='red' 
            onPress={goChat} 
            disabled={userName.length === 0}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      width: '70%',
      height: 50,
      marginTop: 20,
      marginBottom: 20,
      borderColor: 'gray',
      borderRadius: 5,
      borderWidth: 1,
  }
});