import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChequeBookRequestComponent } from './cheque-book-request/cheque-book-request.component';
import { DepositComponent } from './deposit/deposit.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransferBetweenAccountsComponent } from './transfer-between-accounts/transfer-between-accounts.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    ChequeBookRequestComponent,
    DepositComponent,
    EditProfileComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TransactionHistoryComponent,
    TransferBetweenAccountsComponent,
    TransferHistoryComponent,
    WithdrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
