import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUser} from "../../../features/auth/interfaces/iuser";

export const selectUser = createFeatureSelector<IUser>('user');

export const selectUsersList = createSelector(
  selectUser,
  (state: IUser) => state);
