import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetBgService } from './services/get-bg.service';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AvaibleDonationsComponent } from './avaible-donations/avaible-donations.component';
import { CauseComponent } from './cause/cause.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { AvaibleDonationsForUserComponent } from './avaible-donations-for-user/avaible-donations-for-user.component';
import { CreateDonationRequestComponent } from './create-donation-request/create-donation-request.component';
import { AuthInterceptor } from './interceptor';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { PostDonationService } from './services/post-donation.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminService } from './services/admin.service';
import { GetUserDataService } from './services/get-user-data.service';
import { AddLogModalComponent } from './add-log-modal/add-log-modal.component';
import { EntryComponent } from './entry/entry.component';
import { EntryService } from './services/entry.service';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: AuthPageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent },
  { path: 'avaible-donations', component: AvaibleDonationsForUserComponent },
  { path: 'admin-profile', component : AdminProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AuthPageComponent,
    UserProfileComponent,
    AvaibleDonationsComponent,
    CauseComponent,
    DoctorProfileComponent,
    AvaibleDonationsForUserComponent,
    CreateDonationRequestComponent,
    AdminProfileComponent,
    NavBarComponent,
    AddLogModalComponent,
    EntryComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostDonationService, GetBgService, AuthGuardService, AdminService, EntryService,
     AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, GetUserDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
