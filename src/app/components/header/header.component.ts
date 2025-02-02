import { Component, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { KeycloakService } from 'keycloak-angular';
import Keycloak from 'keycloak-js';
import { Observable, map } from 'rxjs';
import { AppActions, getIsLoggedIn } from '../../state';

@Component({
  selector: 'app-header',
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  private store$ = inject(Store);
  public loggedIn$: Observable<boolean>;

  // constructor(private readonly keycloak: Keycloak) {}

  public ngOnInit() {
    console.log('init');
    this.loggedIn$ = this.store$.pipe(select(getIsLoggedIn));
  }

  public login() {
    console.log('login');
    this.store$.dispatch(AppActions.login());
    // this.keycloak.login();
  }

  public logout() {
    console.log('logout');
    this.store$.dispatch(AppActions.logout());
    // let redirectURI: string = 'http://localhost:4200/home';
    // this.keycloak.logout(redirectURI);
  }
}
