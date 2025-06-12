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

  constructor(private authService: AuthService, private router: Router) {}

  resetPassword() {
    const admin = {
      userName: this.userName,
      email: this.email,
      password: this.password,
    };

    this.authService.resetPassword(admin).subscribe(
      (response) => {
        console.log('Respuesta de reseteo de contraseña: ', response);
        if (response.success === true) {
          // Redirige al inicio de sesión después del restablecimiento exitoso
          alert('Contraseña cambiada satisfactoriamente');

          this.router.navigate(['/']);
        } else {
          alert('Usuario o email no encontrado');
        }
      },
      (error) => {
        console.error('Error en restablecimiento de contraseña: ', error);
        // Maneja el error aquí (mostrar mensaje al usuario, etc.)
        alert('Hubo un error al cambiar la contraseña');
      }
    );
  }
}
