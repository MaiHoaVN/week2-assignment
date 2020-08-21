import firebase from 'firebase'; // 4.8.1

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBX-H5h7oDS1kALq8IFzohS_XBe3dK8k7M",
        authDomain: "week7chat.firebaseapp.com",
        databaseURL: "https://week7chat.firebaseio.com",
        projectId: "week7chat",
        storageBucket: "week7chat.appspot.com",
        messagingSenderId: "108152145954",
        appId: "1:108152145954:web:fc12665cd5cfa7f668a27b",
        measurementId: "G-K8BLNR959F"
      });
}

const database = firebase.database();

export default database;