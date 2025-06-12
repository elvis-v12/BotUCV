import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from './dashboard-data.service';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  subtitle: string;
  salesSummary: any = {};
  feeds: any[] = [];
  topCards: any[] = [];
  topSelling: any[] = [];

  constructor(
    private dashboardDataService: DashboardDataService,
    private http: HttpClient
  ) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngOnInit() {
    this.dashboardDataService.getDashboardData().subscribe((data) => {
      this.salesSummary = data.sales_summary;
      this.feeds = data.feeds;
      this.topCards = data.top_cards;
      this.topSelling = data.top_selling;
    });
  }

  generatePDF() {
    const data = document.getElementById('dashboard-content');
    if (data) {
      html2canvas(data).then((canvas) => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('dashboard-report.pdf');
      });
    } else {
      console.error('El elemento #dashboard-content no se encontró.');
    }
  }
}
