import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-report-page',
  templateUrl: './monthly-report-page.component.html',
  styleUrls: ['./monthly-report-page.component.scss']
})
export class MonthlyReportPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
