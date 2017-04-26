import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/modal';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from './services/authguard/authguard.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserService } from './services/user/user.service';
//import { routes } from './app.router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    MiscellaneousComponent,
    HighlightDirective,
    AuthenticationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    Ng2GoogleChartsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'users', component: UsersComponent, canActivate:[AuthguardService], data:{roles:['admin', 'authenticated']}},
      {path: 'about', component: AboutComponent},
      {path: 'miscellaneous', component: MiscellaneousComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate:[AuthguardService], data:{roles:['admin']}},
      {path: '**', component: HomeComponent} // if route not found, default to Home page. in future create a page not found component
    ])
  ],
  providers: [AuthguardService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
