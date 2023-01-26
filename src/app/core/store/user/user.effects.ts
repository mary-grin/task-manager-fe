import {Injectable} from "@angular/core";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  getUser,
  getUserFailed,
  getUserSuccess,
  signIn, signInFailed, signInSuccess,
  signOut, signOutFailed, signOutSuccess
} from "./user.actions";
import {Router} from "@angular/router";
import {AuthService} from "../../../features/auth/services/auth.service";

@Injectable()
export class UserEffects {
  constructor(private authService: AuthService,
              private actions$: Actions,
              private router: Router) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap(() =>
        this.authService.getUserInfo().pipe(
          map((user) => getUserSuccess(user)),
          catchError((err) =>
            of(getUserFailed({error: err})))
        )),
      tap(() => this.router.navigate(['/dashboard']))
    )
  );

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn),
      switchMap((action) =>
        this.authService.signIn(action).pipe(
          map((user) => signInSuccess(user)),
          catchError(err =>
            of(signInFailed({error: err})))
        )),
      tap(() => this.router.navigate(['/dashboard']))
    )
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signOut),
      switchMap(() =>
        this.authService.signOut().pipe(
          map(() => signOutSuccess()),
          tap(() => this.router.navigate(['/auth'])),
          catchError(err =>
            of(signOutFailed({error: err})))
        )),
    )
  );
}
