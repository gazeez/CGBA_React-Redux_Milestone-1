import { ADD_MESSAGE_LIST, ChatActionType } from './ChatTypes';

export function AddReducer (state = [], action: ChatActionType) {

    switch(action.type) {
    case ADD_MESSAGE_LIST:
        return [
                ...state, 
                action.payload 
                ] 
      
        default:
            return state;       
    }   
}
