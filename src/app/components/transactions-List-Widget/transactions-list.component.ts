import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import transactionData from "./../../../mock-data/transactions.json";
import { element } from 'protractor';
export interface TransactionData {
    data: TransactionDetails;
}

export interface TransactionDetails {
    categoryCode: string;
    dates: {
        valueDate: number;
    }
    transaction: Transaction;
    merchant: {
        name: string;
        accountNumber: string;
    }
}

export interface Transaction {
    amountCurrency: {
        amount: number;
        currencyCode: string;
    };
    type: string;
    creditDebitIndicator: string;
}

@Component({
    selector: 'app-transactions-list',
    templateUrl: './transactions-list.component.html',
    styleUrls: ['./transactions-list.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class TransactionsListComponent implements OnInit {
    transactionList: TransactionDetails[];
    filteredTransaction: TransactionDetails[];
    constructor(private http: HttpClient) {}

      ngOnInit() {
        this.getTransactionList();
      }

      getTransactionList() {
        //   this.http.get<any>("mock-data/transactions.json").subscribe((response: TransactionData) => {
        //       console.log(response);
        //       if(response) {
        //           this.transactionList = response.data
        //       }
        //   });
        this.transactionList = transactionData.data;
        this.filteredTransaction = this.transactionList;
        console.log(this.filteredTransaction);
        
      }

      filterTransactionList(event) {
          const filterString = event;
          console.log(this.transactionList);
          
         const filteredList = this.transactionList.filter(element => {
            return  (element.transaction.creditDebitIndicator.toLowerCase().indexOf(filterString) !== -1 || 
                    element.transaction.type.toLowerCase().indexOf(filterString) !== -1 || 
                    element.merchant.name.toLowerCase().indexOf(filterString) !== -1)
         });
         this.filteredTransaction = filteredList;
      }
     
  }
  