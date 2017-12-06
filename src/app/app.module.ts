import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatButton, MatCheckboxModule } from '@angular/material';
import { NgIf, CommonModule } from '@angular/common';

import { ButtonModule, ToggleButtonModule, ConfirmationService, ProgressSpinnerModule,
   MenuModule, DialogModule, InputMaskModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { AppComponent } from './app.component';
import { SignDocumentComponent } from './sign-document/sign-document.component';
import { GrowlModule } from 'primeng/components/growl/growl';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SignDocumentComponent,
    PdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    GrowlModule,
    FormsModule,
    ProgressSpinnerModule,
    PdfViewerModule,
    MatButtonModule,
    MatCheckboxModule,
    MenuModule,
    CommonModule,
    DialogModule,
    InputMaskModule
  ],
  providers: [ ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
