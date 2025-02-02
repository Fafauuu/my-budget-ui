import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { KeycloakService, provideKeycloak } from 'keycloak-angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         url: 'http://localhost:7080/',
//         realm: 'my-budget',
//         clientId: 'my-budget-ac',
//       },
//       initOptions: {
//         pkceMethod: 'S256',
//         redirectUri: 'http://localhost:4200/dashboard',
//       },
//       loadUserProfileAtStartUp: false,
//     });
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideKeycloak({
      config: {
        url: 'http://localhost:7080/',
        realm: 'my-budget',
        clientId: 'my-budget-ac',
      },
      initOptions: {
        pkceMethod: 'S256',
        redirectUri: 'http://localhost:4200/dashboard',
      },
      // loadUserProfileAtStartUp: false,
    }),
  ],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: initializeKeycloak,
  //     multi: true,
  //     deps: [KeycloakService],
  //   },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
