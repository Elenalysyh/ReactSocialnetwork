import { StateType } from "./redux-store";

export let selectIsAuth = (state: StateType) => {
    return state.auth.isAuth
}
export let SelectCurrentUserLogin = (state: StateType) => {
    return state.auth.login
}