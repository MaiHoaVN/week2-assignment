import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput
} from 'react-native';
import {addNote} from '../actions';
import Icon from 'react-native-vector-icons/Feather';

export default function AddNote({navigation}) {
    const [note, setNote] = useState('');
    const dispatch = useDispatch();

    const addNewNote = useCallback(() => {
        dispatch(addNote(note));
        navigation.pop();
    }, [note]);

	return (
		<View style={styles.container}>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					multiline={true}
					placeholder="What do you want to do today?"
                    placeholderTextColor="#abbabb"
                    onChangeText={text=> setNote(text)}
				/>
            <TouchableOpacity onPress={addNewNote}>
		      <Icon name="plus" size={30} color="blue" style={{ marginLeft: 15 }} />
	        </TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	header: {
		marginTop: '15%',
		fontSize: 20,
		color: 'red',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'black',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		paddingLeft: 10,
		minHeight: '3%'
	}
});