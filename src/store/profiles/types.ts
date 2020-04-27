// User data structure
export interface User {
	id: number,
	name: string,
	photo: string,
	username: string,
	password: string,
	email: string,
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {lat: number, lng: number}
	},
	phone: string,
	website: string,
	company: {
		name: string,
		catchPhrase: string,
		bs: string
	},
	age: number,
	gender: string,
	interests: string
}

export interface crtUserGenInfo {
	id: number,
	name: string,
	photo: string,
	username: string,
	age: number,
	gender: string
}

export interface crtUserInterests {
	interests: string
}

export interface crtUserContactInfo {
	email: string,
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {lat: number, lng: number}
	},
	phone: string,
	website: string,
	company: {
		name: string,
		catchPhrase: string,
		bs: string
	}
}

// The collection of users
export interface Profiles {
	users: User[],							// Full list of users

	crtUserGenInfo: crtUserGenInfo,			// Current user general info
	
	crtUserInterests: crtUserInterests,		// Current user's interests (activities, hobbies, whateva!)
	
	crtUserContactInfo: crtUserContactInfo	// Current users' contact info

}

// Actions
export const SELECT_CURRENT_USER = 'SELECT_CURRENT_USER';
export const ADD_NEW_USER = 'ADD_NEW_USER';

// Action requirements
interface SelectCurrentUser {
	type: typeof SELECT_CURRENT_USER,
	id: number		// This will match our user ID
}
interface AddNewUser {
	type: typeof ADD_NEW_USER,
	payload: User	// We need to pass a User object to be added to users
}

export type ProfilesActionTypes = SelectCurrentUser | AddNewUser;