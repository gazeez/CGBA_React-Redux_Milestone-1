import { User, Profiles, SELECT_CURRENT_USER, ADD_NEW_USER, ProfilesActionTypes } from './types';
// import { Z_FULL_FLUSH } from 'zlib';
// import { kMaxLength } from 'buffer';

// Set a default state
const initialState: Profiles = {
	users: [
		{
			"id": 1,
			"name": "Leanne Graham",
			"photo": "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
			"username": "Bret",
			"password": "password1",
			"email": "Sincere@april.biz",
			"address": {
				"street": "Kulas Light",
				"suite": "Apt. 556",
				"city": "Gwenborough",
				"zipcode": "92998-3874",
				"geo": {
				"lat": -37.3159,
				"lng": 81.1496
				}
			},
			"phone": "1-770-736-8031 x56442",
			"website": "hildegard.org",
			"company": {
				"name": "Romaguera-Crona",
				"catchPhrase": "Multi-layered client-server neural-net",
				"bs": "harness real-time e-markets"
			},
			"age": 31,
			"gender": "female",
			"interests": "reading, writing"
		},
		{
			"id": 2,
			"name": "Ervin Howell",
			"photo": "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png",
			"username": "Antonette",
			"password": "password2",
			"email": "Shanna@melissa.tv",
			"address": {
				"street": "Victor Plains",
				"suite": "Suite 879",
				"city": "Wisokyburgh",
				"zipcode": "90566-7771",
				"geo": {
				"lat": -43.9509,
				"lng": -34.4618
				}
			},
			"phone": "010-692-6593 x09125",
			"website": "anastasia.net",
			"company": {
				"name": "Deckow-Crist",
				"catchPhrase": "Proactive didactic contingency",
				"bs": "synergize scalable supply-chains"
			},
			"age": 35,
			"gender": "male",
			"interests": "sleeping, snorring"
		},
		{
			"id": 3,
			"name": "Clementine Bauch",
			"photo": "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387__340.png",
			"username": "Samantha",
			"password": "password3",
			"email": "Nathan@yesenia.net",
			"address": {
				"street": "Douglas Extension",
				"suite": "Suite 847",
				"city": "McKenziehaven",
				"zipcode": "59590-4157",
				"geo": {
				"lat": -68.6102,
				"lng": -47.0653
				}
			},
			"phone": "1-463-123-4447",
			"website": "ramiro.info",
			"company": {
				"name": "Romaguera-Jacobson",
				"catchPhrase": "Face to face bifurcated interface",
				"bs": "e-enable strategic applications"
			},
			"age": 32,
			"gender": "female",
			"interests": "sneezing, coughing"
		},
		{
			"id": 4,
			"name": "Patricia Lebsack",
			"photo": "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027367__340.png",
			"username": "Karianne",
			"password": "password4",
			"email": "Julianne.OConner@kory.org",
			"address": {
				"street": "Hoeger Mall",
				"suite": "Apt. 692",
				"city": "South Elvis",
				"zipcode": "53919-4257",
				"geo": {
				"lat": 29.4572,
				"lng": -164.2990
				}
			},
			"phone": "493-170-9623 x156",
			"website": "kale.biz",
			"company": {
				"name": "Robel-Corkery",
				"catchPhrase": "Multi-tiered zero tolerance productivity",
				"bs": "transition cutting-edge web services"
			},
			"age": 33,
			"gender": "female",
			"interests": "sitting, standing"
		},
		{
			"id": 5,
			"name": "Chelsey Dietrich",
			"photo": "https://kripalu.org/sites/default/files/styles/headshot_large/public/KorusChelsey_0.jpg",
			"username": "Kamren",
			"password": "password5",
			"email": "Lucio_Hettinger@annie.ca",
			"address": {
				"street": "Skiles Walks",
				"suite": "Suite 351",
				"city": "Roscoeview",
				"zipcode": "33263",
				"geo": {
				"lat": -31.8129,
				"lng": 62.5342
				}
			},
			"phone": "(254)954-1289",
			"website": "demarco.info",
			"company": {
				"name": "Keebler LLC",
				"catchPhrase": "User-centric fault-tolerant solution",
				"bs": "revolutionize end-to-end systems"
			},
			"age": 36,
			"gender": "female",
			"interests": "cooking, eating"
		},
		{
			"id": 6,
			"name": "Mrs. Dennis Schulist",
			"photo": "https://cdn.pixabay.com/photo/2018/04/28/13/18/man-3357275__340.png",
			"username": "Leopoldo_Corkery",
			"password": "password6",
			"email": "Karley_Dach@jasper.info",
			"address": {
				"street": "Norberto Crossing",
				"suite": "Apt. 950",
				"city": "South Christy",
				"zipcode": "23505-1337",
				"geo": {
				"lat": -71.4197,
				"lng": 71.7478
				}
			},
			"phone": "1-477-935-8478 x6430",
			"website": "ola.org",
			"company": {
				"name": "Considine-Lockman",
				"catchPhrase": "Synchronised bottom-line interface",
				"bs": "e-enable innovative applications"
			},
			"age": 36,
			"gender": "male",
			"interests": "singing, painting"
		},
		{
			"id": 7,
			"name": "Kurtis Weissnat",
			"photo": "https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477__340.png",
			"username": "Elwyn.Skiles",
			"password": "password7",
			"email": "Telly.Hoeger@billy.biz",
			"address": {
				"street": "Rex Trail",
				"suite": "Suite 280",
				"city": "Howemouth",
				"zipcode": "58804-1099",
				"geo": {
				"lat": 24.8918,
				"lng": 21.8984
				}
			},
			"phone": "210.067.6132",
			"website": "elvis.io",
			"company": {
				"name": "Johns Group",
				"catchPhrase": "Configurable multimedia task-force",
				"bs": "generate enterprise e-tailers"
			},
			"age": 39,
			"gender": "male",
			"interests": "drinking, smoking"
		},
		{
			"id": 8,
			"name": "Nicholas Runolfsdottir V",
			"photo": "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png",
			"username": "Maxime_Nienow",
			"password": "password8",
			"email": "Sherwood@rosamond.me",
			"address": {
				"street": "Ellsworth Summit",
				"suite": "Suite 729",
				"city": "Aliyaview",
				"zipcode": "45169",
				"geo": {
				"lat": -14.3990,
				"lng": -120.7677
				}
			},
			"phone": "586.493.6943 x140",
			"website": "jacynthe.com",
			"company": {
				"name": "Abernathy Group",
				"catchPhrase": "Implemented secondary concept",
				"bs": "e-enable extensible e-tailers"
			},
			"age": 39,
			"gender": "male",
			"interests": "AR-15, Uzi, Glock 9mm"
		},
		{
			"id": 9,
			"name": "Glenna Reichert",
			"photo": "https://cdn.pixabay.com/photo/2015/10/18/20/15/woman-995164__340.png",
			"username": "Delphine",
			"password": "password9",
			"email": "Chaim_McDermott@dana.io",
			"address": {
				"street": "Dayna Park",
				"suite": "Suite 449",
				"city": "Bartholomebury",
				"zipcode": "76495-3109",
				"geo": {
				"lat": 24.6463,
				"lng": -168.8889
				}
			},
			"phone": "(775)976-6794 x41206",
			"website": "conrad.com",
			"company": {
				"name": "Yost and Sons",
				"catchPhrase": "Switchable contextually-based project",
				"bs": "aggregate real-time technologies"
			},
			"age": 34,
			"gender": "female",
			"interests": "sugar, coffee, alcohol, cocaine"
		},
		{
			"id": 10,
			"name": "Clementina DuBuque",
			"photo": "https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404__340.png",
			"username": "Moriah.Stanton",
			"password": "password10",
			"email": "Rey.Padberg@karina.biz",
			"address": {
				"street": "Kattie Turnpike",
				"suite": "Suite 198",
				"city": "Lebsackbury",
				"zipcode": "31428-2261",
				"geo": {
				"lat": -38.2386,
				"lng": 57.2232
				}
			},
			"phone": "024-648-3804",
			"website": "ambrose.net",
			"company": {
				"name": "Hoeger LLC",
				"catchPhrase": "Centralized empowering task-force",
				"bs": "target end-to-end models"
			},
			"age": 32,
			"gender": "female",
			"interests": "sugar, coffee, alcohol, cocaine"
		}
	],
	crtUserGenInfo: {		// Current user's general info
		id: 1,
		name: "Leanne Graham",
		photo: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png",
		username: "Bret",
		age: 31,
		gender: "female"
	},
	crtUserInterests: {		// Current user's personal interests
		interests: "reading, writing"
	},
	crtUserContactInfo: {	// Current user's contact info
		email: "Sincere@april.biz",
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			zipcode: "92998-3874",
			geo: {
				lat: -37.3159,
				lng: 81.1496
			}
		},
		phone: "1-770-736-8031 x56442",
		website: "hildegard.org",
		company: {
			name: "Romaguera-Crona",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets"
		}
	}
}

// Now to set up our reducer / functionality!
export function profilesReducer ( state = initialState, action: ProfilesActionTypes ) {
	switch ( action.type ) {
		case SELECT_CURRENT_USER:
			console.log ("Reducer running - Select Current user: " + action.id);
			const userx: User | undefined = state.users.find( (elem) => {return elem.id===action.id;})
			if (userx !== undefined) {
				console.log("Found user with ID = " + userx.id);
				return {
					users: state.users,
					crtUserGenInfo: {		// Current user's general info
						id: userx.id,
						name: userx.name,
						photo: userx.photo,
						username: userx.username,
						age: userx.age,
						gender: userx.gender
					},
					crtUserInterests: {		// Current user's personal interests
						interests: userx.interests
					},
					crtUserContactInfo: {	// Current user's contact info
						email: userx.email,
						address: {
							street: userx.address.street,
							suite: userx.address.suite,
							city: userx.address.city,
							zipcode: userx.address.zipcode,
							geo: {
								lat: userx.address.geo.lat,
								lng: userx.address.geo.lng
							}
						},
						phone: userx.phone,
						website: userx.website,
						company: {
							name: userx.company.name,
							catchPhrase: userx.company.catchPhrase,
							bs: userx.company.bs
						}
					}			
				} }
			else
				return {
					...state,
					crtUserGenInfo: {		// Current user's general info when user not found
						id: action.id,
						name: "USER NOT FOUND!",
						photo: "",
						username: "USER NOT FOUND!",
						age: 0,
						gender: "USER NOT FOUND!"
					},
				};
		case ADD_NEW_USER:
			return {
				...state,
				users: [ ...state.users, action.payload ]
			}
		default:
			return state;
	}
}