import { ProfilesActionTypes, SELECT_CURRENT_USER, User } from './types';

export function selectCurrentUser ( id: number ) {
	return {
		type: SELECT_CURRENT_USER,
		payload: id		// User is looked up by id
	}
}