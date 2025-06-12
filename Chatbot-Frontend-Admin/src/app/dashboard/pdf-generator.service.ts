import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  generatePdf(data: any) {
    const doc = new jsPDF();

    doc.text('Sales Summary', 10, 10);
    let y = 20;
    data.salesSummary.forEach((summary: any) => {
      doc.text(`${summary.name}: ${summary.value}`, 10, y);
      y += 10;
    });

    doc.text('Top Cards', 10, y);
    y += 10;
    data.topCards.forEach((card: any) => {
      doc.text(`${card.name} - ${card.description}`, 10, y);
      y += 10;
    });

    doc.text('Top Selling', 10, y);
    y += 10;
    data.topSelling.forEach((item: any) => {
      doc.text(`${item.name} - ${item.description}`, 10, y);
      y += 10;
    });

    doc.save('report.pdf');
  }
}
