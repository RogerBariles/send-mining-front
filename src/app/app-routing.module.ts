import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./secciones/inicio/inicio.module').then(m => m.InicioModule)
      }
    ]
  }
];
