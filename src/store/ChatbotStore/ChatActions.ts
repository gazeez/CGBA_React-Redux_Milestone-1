import { ADD_MESSAGE_LIST, ChatActionType } from './ChatTypes'

export function ADD_MESSAGE (step: any): ChatActionType {
    return {
        type: ADD_MESSAGE_LIST,
        payload: step
    }   
}

