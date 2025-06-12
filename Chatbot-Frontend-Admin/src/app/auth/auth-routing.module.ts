// auth-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component'; // Importa el nuevo componente

const MAIN_AUTH_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login | UcvBot - Admin' }, // Utiliza 'data' en lugar de 'title'
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent, // Agrega la ruta para ResetPasswordComponent
    data: { title: 'Reset Password | UcvBot - Admin' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(MAIN_AUTH_ROUTES)],
  exports: [RouterModule] // Asegúrate de exportar RouterModule aquí
})
export class LocalAuthRoutingModule {}
