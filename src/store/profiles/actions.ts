import { ProfilesActionTypes, ADD_NEW_USER, SELECT_CURRENT_USER, User } from './types';

export function selectCurrentUser ( id: number ): ProfilesActionTypes {
	return {
		type: SELECT_CURRENT_USER,
		id: id				// User is looked up by id
	}
}

export function addNewUser (user: User): ProfilesActionTypes {
	return {
		type: ADD_NEW_USER,
		payload: user		// Will only accept type: User
	}
}