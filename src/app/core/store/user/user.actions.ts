import {createAction, props} from "@ngrx/store";
import {IUser, IUserAuth} from "../../../features/auth/interfaces/iuser";

export const getUser = createAction('[User] Get User');

export const getUserSuccess = createAction('[User] Get User Success',
  props<IUser>()
);

export const getUserFailed = createAction('[User] Get User Failed',
  props<{error: Error}>()
);

export const signIn = createAction('[User] Sign In',
  props<IUserAuth>()
);

export const signInSuccess = createAction('[User] Sign In Success',
  props<IUser>()
);

export const signInFailed = createAction('[User] Sign In Failed',
  props<{error: Error}>()
);

export const signOut = createAction('[User] Sign Out');

export const signOutSuccess = createAction('[User] Sign Out Success');

export const signOutFailed = createAction('[User] Sign Out Failed',
  props<{error: Error}>()
);
