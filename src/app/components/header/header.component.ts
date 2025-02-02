import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-header',
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;

  constructor(private readonly keycloak: Keycloak) {}

  public async ngOnInit() {
    console.log('init');
    // this.isLoggedIn = await this.keycloak.isLoggedIn();
  }

  public login() {
    console.log('login');
    this.keycloak.login();
  }

  public logout() {
    console.log('logout');
    // let redirectURI: string = 'http://localhost:4200/home';
    // this.keycloak.logout(redirectURI);
  }
}
