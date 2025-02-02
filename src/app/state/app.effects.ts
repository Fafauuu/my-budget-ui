import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppActions } from '.';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
  private actions$ = inject(Actions);
  private router = inject(Router);

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.login),
        tap(() => console.log('inside login effect'))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.logout),
        tap(() => {
          console.log('inside logout effect');
          this.router.navigate(['/home']);
        })
      ),
    { dispatch: false }
  );
}
