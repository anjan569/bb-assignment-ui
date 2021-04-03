import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { TransactionDetails } from "../transactions-List-Widget/transactions-list.component";

@Component({
    selector: 'app-transactions-card',
    templateUrl: './transaction-card.component.html',
    styleUrls: ['./transaction-card.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class TransactionCardComponent implements OnInit {

     @Input() transactionDetails: TransactionDetails;
      constructor() {
        
      }

      ngOnInit() {
        console.log(this.transactionDetails);
      }
  }