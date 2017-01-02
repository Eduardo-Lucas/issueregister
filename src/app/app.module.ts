import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing.module';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AboutComponent } from './components/about/about.component';
import { ContatoComponent } from './components/contato/contato.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { Auth } from './services/auth.service';
import { AuthGuard } from './auth.guard';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyD9jiGTTak3A7GI8ahBqRtiMf9njiEwSGI',
  authDomain: 'issueregister.firebaseapp.com',
  databaseURL: 'https://issueregister.firebaseio.com',
  storageBucket: 'issueregister.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssueListComponent,
    JumbotronComponent,
    AboutComponent,
    ContatoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [ AUTH_PROVIDERS, Auth, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
