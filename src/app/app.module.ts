import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TransactionsListComponent } from './components/transactions-List-Widget/transactions-list.component';
import { TransferComponent } from './components/transfer-Widget/transfer.component';
import { TransactionTypePipe } from './transaction.pipe';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialog } from './components/confirmation-dailog/confirmation-dailog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionsListComponent,
    TransferComponent,
    TransactionTypePipe,
    TransactionCardComponent,
    ConfirmationDialog
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    ConfirmationDialog
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
