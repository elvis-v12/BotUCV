import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html'
})
export class SalesSummaryComponent implements OnInit {
  @Input() salesSummary: any[] = [];

  constructor() { }

  ngOnInit(): void { }
}
