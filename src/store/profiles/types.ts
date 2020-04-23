// User data structure
export interface User {
	id: number,
	name: string,
	password: string,
	email: string,
	phone: string,
	age: number,
	interests: string
}

// The collection of users
export interface Profiles {
	users: User[]
}

// Actions
export const SELECT_CURRENT_USER = 'SELECT_CURRENT_USER';

// Action requirements
interface SelectCurrentUser {
	type: typeof SELECT_CURRENT_USER,
	id: number		// This will match our user ID
}

export type ProfilesActionTypes = SelectCurrentUser;