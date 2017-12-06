import { Component } from '@angular/core';
import { Message, ConfirmationService, } from 'primeng/components/common/api';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-sign-document',
  templateUrl: './sign-document.component.html',
  styleUrls: ['./sign-document.component.css'],
  providers: [ConfirmationService]
})
export class SignDocumentComponent {

  display: boolean = false;
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  // När användaren klickar på "Signera med BankID"
  confirm() {
    this.display = true;
  }
// När användaren väljer Mobilt BankID
  mobileBankID() {
 }

}
