import { Component, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialog } from "../confirmation-dailog/confirmation-dailog.component";

@Component({
    selector: 'app-transfer',
    templateUrl: './transfer.component.html',
    styleUrls: ['./transfer.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class TransferComponent {
    isSuccess: boolean;
    transferForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
      this.createContactForm();
    }

    createContactForm(){
      this.transferForm = new FormGroup({
        fromAccount: new FormControl({value:'', disabled: true}),  
        toAccount:  new FormControl(),
        amount:  new FormControl()
      });

      this.transferForm.setValue({
        fromAccount: 'My Personal Account: € 5824.76',
        toAccount: '',
        amount: ''
      });
    }
    checkBalance(event) {
      const value = event;
      if (value > 5824.76) {
        this.transferForm.get('amount').setErrors({MaxValue: true})
      }
    }

    submitTransaction() {
      this.openDialog();
    } 

    openDialog() {
      const dialogRef = this.dialog.open(ConfirmationDialog,{
        width: '40%',
        data:{
          toAccount: this.transferForm.get('toAccount').value,
          amount: this.transferForm.get('amount').value
        }
      });
  
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        console.log(confirmed);
        
        if (confirmed) {
          this.isSuccess = true;
        } else {
          this.isSuccess = false;
        }
      });
    }

    dismiss() {
      this.isSuccess = false;
    }

  }
  