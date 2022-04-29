import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizeRegistrationComponent } from './authorize-registration/authorize-registration.component';
import { CheckbookRequestsComponent } from './checkbook-requests/checkbook-requests.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ModelComponent } from './model/model.component';
import { LoginComponent } from './login/login.component';
import { Checkbook } from './checkbook.service/checkbook.service.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeRegistrationComponent,
    CheckbookRequestsComponent,
    UserAccountComponent,
    ModelComponent,
    LoginComponent,
    Checkbook.ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
