// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/admins'; // Ajusta según tu configuración
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) {}

  login(admin: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, admin, {
      headers: this.headers,
    });
  }

  resetPassword(admin: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password`, admin, {
      headers: this.headers,
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
