import { Profiles, SELECT_CURRENT_USER, ProfilesActionTypes } from './types';
import { Z_FULL_FLUSH } from 'zlib';

// Set a default state
const initialState: Profiles = {
	users: [
		{
			id: 15,
			name: 'Jack Black',
			password: 'jackblack',
			email: 'jack.black@zulu.com',
			phone: '2645894251',
			age: 31,
			interests: 'sleeping, snorring, burping'
		},
		{
			id: 26,
			name: 'Jimmy Shimmy',
			password: 'jimmysh',
			email: 'jimmy.shim@theboys.com',
			phone: '5843365741',
			age: 33,
			interests: 'shooting, driving, stunts'
		},
	]
}