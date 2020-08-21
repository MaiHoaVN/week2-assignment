import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import database from '../service/Fire';


export default function Chat({route, navigation}) {
    const {userName} = route.params;
    const [messages, setMessages] = useState([]);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        database.ref('messages').push(messages[0]);
      }, [])

    useEffect(() => {
          database.ref('/messages').once('value').then(snapshot =>  {
            console.log(snapshot.val())
           setMessages(snapshot.val());
          });
    }, [])
    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
            _id: 1,
        }}
    />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});