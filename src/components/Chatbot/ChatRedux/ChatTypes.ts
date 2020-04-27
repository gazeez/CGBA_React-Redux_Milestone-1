// Create Types for the state related to Action
export interface Text {
    text: [string],
}

// Action Type Definitions
export const ADD_MESSAGE_LIST = 'ADD_MESSAGE_LIST'

// Model Type Definitions
export interface ChatState {
    text : Text []
    
            
}
// Action Definitions
export interface ADD_MESSAGE {
    type: typeof ADD_MESSAGE_LIST
    payload: Text
}

// Action passed to Reducer
export type ChatActionType = ADD_MESSAGE 