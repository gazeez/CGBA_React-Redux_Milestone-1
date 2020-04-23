import { ButtonState, ADD_MESSAGE_LIST, REMOVE_MESSAGE_LIST, ChatActionType } from '../types';

const initialState: ButtonState = {
    text : 'Welcome to our social media',
}

export function AddReducer (state = initialState, action: ChatActionType) : ButtonState {

    switch(action.type) {
    case ADD_MESSAGE_LIST:
        return {
                ...state, 
                text: action.payload
                } 
    
    case REMOVE_MESSAGE_LIST:
        return {
                ...state, 
                text: action.payload
                }   
        default:
            return state;       
    }   
}
