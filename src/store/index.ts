import {createStore} from 'redux';
import {newsFeedReducer} from './newsfeed/reducers';


function configureStore(){
    const store=createStore(newsFeedReducer);
    
    return store;
}

export default configureStore;

