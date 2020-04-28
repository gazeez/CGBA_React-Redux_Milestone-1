import { combineReducers, createStore } from 'redux';
import { profilesReducer } from './profiles/reducers';
// import { homePageReducer } from './homepage/reducers';
// import { newsFeedReducer } from './newsfeed/reducers';
import { newsFeedReducer } from './newsfeed/reducers';

// Combine all the reducers together for a global app.
const rootReducer = combineReducers( {
	// homepage: homePageReducer,
	newsfeed: newsFeedReducer,
	profiles: profilesReducer
} );

// "typeof" will grab the type that the "combineReducers" function returned.
export type RootState = ReturnType<typeof rootReducer>;

// Here is our redux store! It knows about our actions and reducers.
const store = createStore( rootReducer );
// const store=createStore(newsFeedReducer);
export default store;
