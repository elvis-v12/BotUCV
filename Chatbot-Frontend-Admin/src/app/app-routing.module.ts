import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

// export const appRoutes: Routes = [
//   {
//     path: '',
//     component: FullComponent,

//     children: [
//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full',
//       },
//       {
//         path: 'dashboard',
//         loadChildren: () =>
//           import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
//       },
//       {
//         path: 'training',
//         loadChildren: () =>
//           import('./training/training.module').then((m) => m.TrainingModule),
//       },
//       {
//         path: 'component',
//         loadChildren: () =>
//           import('./component/component.module').then(
//             (m) => m.ComponentsModule
//           ),
//       },
//     ],
//   },
//   {
//     path: 'login',
//     loadChildren: () =>
//       import('./auth/auth.module').then((m) => m.LocalAuthModule),
//   },
//   {
//     path: '**',
//     redirectTo: 'dashboard',
//   },
// ];

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: FullComponent,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'training',
        loadChildren: () =>
          import('./training/training.module').then((m) => m.TrainingModule),
      },
      {
        path: 'component',
        loadChildren: () =>
          import('./component/component.module').then(
            (m) => m.ComponentsModule
          ),
      },
    ],
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.LocalAuthModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
