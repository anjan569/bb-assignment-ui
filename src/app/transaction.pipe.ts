
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Pipe({
  name: 'transactionPipe'
})
export class TransactionTypePipe implements PipeTransform {

   transform(value: any, args?: any): any {
  
        let firstDigit = value.match(/\d/);
        let symbol = value.slice(0, firstDigit.index);
       
        let amount = args === 'DBIT'?`-${value.slice(firstDigit.index)}`: value.slice(firstDigit.index);   
        return args === 'DBIT'? `${symbol}${amount}`: symbol +' '+ amount;
   }

}