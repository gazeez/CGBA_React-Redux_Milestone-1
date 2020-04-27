import { ADD_MESSAGE_LIST, ChatActionType } from './ChatTypes';
import { ApiApClient } from 'api-ai-javascript';

const accessTaken = '15c4946c6a634b71870e374aae19e7ca';
const client = new ApiApClient({accessTaken});


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
