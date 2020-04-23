import { ADD_MESSAGE_LIST, REMOVE_MESSAGE_LIST, ChatActionType } from '../types'

export function ADD_MESSAGE (text: string): ChatActionType {
    return {
        type: ADD_MESSAGE_LIST,
        payload: text
    }   
}

export function REMOVE_MESSAGE (text: string): ChatActionType {
    return {
        type: REMOVE_MESSAGE_LIST,
        payload: text
    }   
}