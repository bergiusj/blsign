import { Component, OnInit } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {

  zoom: number = 1.0;
  page: number = 1;
  showAll: boolean = false ;

  incrementZoom(amount: number) {
    this.zoom += amount;
  }

  incrementPage(amount: number) {
    this.page += amount;
    window.scrollTo(0, 0);
  }


}

