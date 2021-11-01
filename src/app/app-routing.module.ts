import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./secciones/inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./secciones/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'plans',
        loadChildren: () => import('./secciones/planes/planes.module').then(m => m.PlaneModule)
      }
    ]
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        loadChildren: () => import('./secciones/mi-perfil/mi-perfil.module').then(m => m.MiPerfilModule)
      }
    ]
  }
];
