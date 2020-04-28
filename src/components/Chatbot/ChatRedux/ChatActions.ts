import { ADD_MESSAGE_LIST, ChatActionType, Text } from './ChatTypes'

export function ADD_MESSAGE (text: Text): ChatActionType {
    return {
        type: ADD_MESSAGE_LIST,
        payload: text
    }   
}

