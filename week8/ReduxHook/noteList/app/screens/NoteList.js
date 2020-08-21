import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	FlatList,
} from 'react-native';
import {deleteNote} from '../actions';
import Icon from 'react-native-vector-icons/Feather';

export default function NoteList({navigation}) {
    const notes = useSelector(state => state.noteReducer);
    const dispatch = useDispatch();

	return (
		<View style={styles.container}>
        	<TouchableOpacity onPress={() => navigation.navigate('AddNote')}>
		      <Icon name="plus" size={30} color="blue" style={{ marginLeft: 15 }} />
	      	</TouchableOpacity>
			  <FlatList
                data={notes}
                renderItem={({ item }) => (
                    <View style={{height: 50, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text>{item.note}</Text>
                        <TouchableOpacity 
                            onPress={() => dispatch(deleteNote(item.id))}
                            style={{width: 50, height: '100%'}}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
            )}
			keyExtractor={item => item.id.toString()}
				/>
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