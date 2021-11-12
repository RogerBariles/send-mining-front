import { Routes } from '@angular/router';
import { ContratarPlanComponent } from './contratar-plan/contratar-plan.component';
import { DataPerfilComponent } from './data-perfil/data-perfil.component';

export const routesMiPerfil: Routes = [
    {
        path: '',
        component: DataPerfilComponent
    },
    {
        path: 'contratar-plan',
        component: ContratarPlanComponent
    }
];