
// Action Type Definitions
export const ADD_MESSAGE_LIST = 'ADD_MESSAGE_LIST'
export const REMOVE_MESSAGE_LIST = 'REMOVE_MESSAGE_LIST'

// Model Type Definitions
export interface ButtonState {
    text : string,
        
}
// Action Definitions
export interface ADD_MESSAGE {
    type: typeof ADD_MESSAGE_LIST
    payload: string
}
export interface REMOVE_MESSAGE {
    type: typeof REMOVE_MESSAGE_LIST
    payload: string
}
export type ChatActionType = ADD_MESSAGE | REMOVE_MESSAGE 