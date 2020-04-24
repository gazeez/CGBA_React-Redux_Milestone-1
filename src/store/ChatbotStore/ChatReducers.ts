import { ADD_MESSAGE_LIST, ChatActionType, ChatState } from './ChatTypes';

const initialState: ChatState = {

    steps : [
        {
            id: '1',
            message:'Welcome to TechCareer Social Media',
            user: true
        },
        {
            id: '2',
            message:'What is your name?',
            user: true
        }
        
    ]

}
export function AddReducer (state = initialState, action: ChatActionType) {

    switch(action.type) {
    case ADD_MESSAGE_LIST:
        return {
                ...state, 
                steps: [ ...state.steps, action.payload ]
                } 
      
        default:
            return state;       
    }   
}
