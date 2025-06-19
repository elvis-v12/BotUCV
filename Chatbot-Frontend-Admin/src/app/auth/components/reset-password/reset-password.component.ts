import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;
  showError: boolean = false;
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getPasswordStrength(): string {
    if (!this.password) return '';
    
    let score = 0;
    
    // Longitud
    if (this.password.length >= 8) score++;
    if (this.password.length >= 12) score++;
    
    // Complejidad
    if (/[a-z]/.test(this.password)) score++;
    if (/[A-Z]/.test(this.password)) score++;
    if (/[0-9]/.test(this.password)) score++;
    if (/[^A-Za-z0-9]/.test(this.password)) score++;
    
    if (score <= 2) return 'weak';
    if (score <= 3) return 'fair';
    if (score <= 4) return 'good';
    return 'strong';
  }

  getPasswordStrengthText(): string {
    const strength = this.getPasswordStrength();
    switch (strength) {
      case 'weak': return 'Contraseña débil';
      case 'fair': return 'Contraseña regular';
      case 'good': return 'Contraseña buena';
      case 'strong': return 'Contraseña fuerte';
      default: return '';
    }
  }

  validateForm(): boolean {
    this.showError = false;
    
    if (!this.userName || !this.email || !this.password) {
      this.showError = true;
      this.showMessage('Por favor, complete todos los campos', 'error');
      return false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.showMessage('Por favor, ingrese un email válido', 'error');
      return false;
    }

    // Validar contraseña
    if (this.password.length < 6) {
      this.showMessage('La contraseña debe tener al menos 6 caracteres', 'error');
      return false;
    }

    return true;
  }

  showMessage(text: string, type: 'success' | 'error') {
    this.message = text;
    this.messageType = type;
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }

  resetPassword() {
    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;
    this.message = '';

    const admin = {
      userName: this.userName,
      email: this.email,
      password: this.password,
    };

    this.authService.resetPassword(admin).subscribe(
      (response) => {
        this.isLoading = false;
        console.log('Respuesta de reseteo de contraseña: ', response);
        
        if (response.success === true) {
          this.showMessage('¡Contraseña restablecida exitosamente!', 'success');
          
          // Redirigir después de 2 segundos
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        } else {
          this.showMessage('Usuario o email no encontrado', 'error');
        }
      },
      (error) => {
        this.isLoading = false;
        console.error('Error en restablecimiento de contraseña: ', error);
        
        // Manejo de errores más específico
        if (error.status === 404) {
          this.showMessage('Usuario o email no encontrado', 'error');
        } else if (error.status === 400) {
          this.showMessage('Datos inválidos. Verifique la información ingresada', 'error');
        } else if (error.status === 500) {
          this.showMessage('Error del servidor. Intente nuevamente más tarde', 'error');
        } else {
          this.showMessage('Error de conexión. Verifique su conexión a internet', 'error');
        }
      }
    );
  }
}