// Create Types for the state related to Action
export interface Step {
    id: any,
    message: string,
    user: boolean
}

// Action Type Definitions
export const ADD_MESSAGE_LIST = 'ADD_MESSAGE_LIST'

// Model Type Definitions
export interface ChatState {
    steps : Step[],
        
}
// Action Definitions
export interface ADD_MESSAGE {
    type: typeof ADD_MESSAGE_LIST
    payload: Step
}

// Action passed to Reducer
export type ChatActionType = ADD_MESSAGE 