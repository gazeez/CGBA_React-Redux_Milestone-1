import { AddReducer } from "../reducers/index";
import { combineReducers, createStore, applyMiddleware  } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers ({
    text : AddReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore () {
    const store = createStore (
        rootReducer,
        composeWithDevTools(
            applyMiddleware()

        )
    );
    return store;
}
