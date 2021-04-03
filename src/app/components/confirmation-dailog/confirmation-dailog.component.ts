import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dailog.component.html',
  styleUrls: ['./confirmation-dailog.component.scss'],
})
export class ConfirmationDialog {
  toAccount: string;
  amount: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmationDialog>) {
        console.log(data);
        
    if(data){
        this.toAccount = data.toAccount;
        this.amount = data.amount;
    }
  }

  onCancle(): void {
    this.dialogRef.close(false);
  }
  
  onSubmit() {
      this.dialogRef.close(true)
  }
}