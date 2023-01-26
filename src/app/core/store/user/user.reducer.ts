import {createReducer, on} from "@ngrx/store";
import {initialState} from "./user.state";
import {getUserSuccess, signInSuccess, signOutSuccess} from "./user.actions";

export const userReducer = createReducer(
  initialState,
  on(getUserSuccess, (state, user) => ({id: user.id, email: user.email, imgSrc: user.imgSrc})),
  on(signInSuccess, (state, user) => ({id: user.id, email: user.email, imgSrc: user.imgSrc})),
  on(signOutSuccess, () => (initialState))
)
