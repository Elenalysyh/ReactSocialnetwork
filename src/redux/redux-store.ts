import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogPage: dialogReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        isInitialize: appReducer
    }
)

type RootReducerType = typeof reducers;
export type StateType = ReturnType<RootReducerType>

// Back to video 09
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...arg: any[])=> any} > = ReturnType<PropertiesType<T>>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
export type BaseThunkActionType<A extends Action, R = Promise<void>> = ThunkAction<R, StateType, unknown, A>