import * as ActionTypes from '../actionTypes';
import * as _ from 'lodash';

const initialNoteState = [];

export default function noteReducer(state = initialNoteState, action) {
    switch (action.type) {
        case ActionTypes.ADD_NOTE:
            return [
                ...state,
                {
                    id: action.payload.id,
                    note: action.payload.note,
                }
            ]
            
        case ActionTypes.DELETE_NOTE:
            return _.remove(state, obj => obj.id !== action.payload.id);

        default:
            return state;
            break;
    }
}