import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  private apiUrl = 'http://localhost:5000/api/dashboard-data';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  generatePDFReport(): Observable<Blob> {
    const pdfUrl = `${this.apiUrl}/reports/pdf`;
    return this.http.get<Blob>(pdfUrl, { responseType: 'blob' as 'json' });
  }
}
