import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { AppEffects, appReducer } from './state';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appReducer }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN',
      })
    ),
  ],
  // providers: [
  //   provideKeycloak({
  //     config: {
  //       url: 'http://localhost:7080/',
  //       realm: 'my-budget',
  //       clientId: 'my-budget-ac',
  //     },
  //     initOptions: {
  //       pkceMethod: 'S256',
  //       redirectUri: 'http://localhost:4200/dashboard',
  //     },
  //     // loadUserProfileAtStartUp: false,
  //   }),
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
