/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

const Login: () => React$Node = () => {

    const saveToken = async (accessToken) => {
        try {
          await AsyncStorage.setItem('@AccessToken', accessToken)
        } catch (e) {
          // saving error
        }
      }

    return (
        <View style={styles.container}>
          <LoginButton
            onLoginFinished={
              (error, result) => {
                if (error) {
                  console.log("login has error: " + result.error);
                } else if (result.isCancelled) {
                  console.log("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data.accessToken.toString())
                      const accessToken = data.accessToken.toString();
                      saveToken(accessToken);
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => console.log("logout.")}/>
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Login;
