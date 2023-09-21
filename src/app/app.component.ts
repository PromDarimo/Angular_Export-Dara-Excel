import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import jspdf from 'jspdf';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Export-to-Excel';
  fileName = 'ExcelSheet.xlsx';
  userList = [
    { "id": 1, "name": "Batman", "username": "Bruce Wynce", "email": "Bruce@justice.com" },
    { "id": 2, "name": "Superman", "username": "Clark", "email": "Clark@justice.com" },
    { "id": 3, "name": "Wonder Woman", "username": "Diana", "email": "Diana@justice.com" },
    { "id": 4, "name": "The Flash", "username": "Berry Allen", "email": "Berrey@justice.com" },
    { "id": 5, "name": "Green Lenten", "username": "Hal Jorden", "email": "Hal@justice.com" },
    { "id": 6, "name": "Aquaman", "username": "Auther", "email": "Auther@justice.com" },
    { "id": 7, "name": "Cyborg", "username": "Victor Stone", "email": "Victor@justice.com" }
  ]

  exportexcel() {

    //get id table in html
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
