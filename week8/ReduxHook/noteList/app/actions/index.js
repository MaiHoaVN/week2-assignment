import * as ActionTypes from '../actionTypes';

let idNote = 0;

export function addNote(note) {
    return {
        type: ActionTypes.ADD_NOTE,
        payload: {
            note,
            id: idNote++,
        }
    }
}

export function deleteNote(id) {
    return {
        type: ActionTypes.DELETE_NOTE,
        payload: {
            id,
        }
    }
}