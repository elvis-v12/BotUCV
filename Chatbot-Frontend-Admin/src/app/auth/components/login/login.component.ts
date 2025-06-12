import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userName: string = ''; // Modelo para el nombre de usuario
  password: string = ''; // Modelo para la contraseña
  constructor(private authService: AuthService, private router: Router) {}

  ingresar() {
    const admin = {
      userName: this.userName,
      password: this.password,
    };

    this.authService.login(admin).subscribe(
      (response) => {
        console.log('Respuesta de iniciar sesión: ', response);
        // Navega al dashboard después del inicio de sesión exitoso
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error en inicio de sesión: ', error);
        if (error.status === 401) {
          // Mostrar mensaje de credenciales inválidas
          alert('Credenciales inválidas. Por favor, intenta de nuevo.');
        } else {
          // Manejar otros tipos de errores
          alert(
            'Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde.'
          );
        }
      }
    );
  }

  addCharacter(character: string) {
    if (this.password.length < 8) {
      this.password += character;
    }
  }

  clearInput() {
    this.password = '';
  }

  deleteCharacter() {
    this.password = this.password.slice(0, -1);
  }
}
