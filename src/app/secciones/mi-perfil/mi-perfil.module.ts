import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil.component';
import { routesMiPerfil } from './mi-perfil.routing';
import { DataPerfilComponent } from './data-perfil/data-perfil.component';
import { ButtonCommonComponent } from 'src/app/commons-components/button-common/button-common.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routesMiPerfil),
    ],
    exports: [],
    declarations: [
        MiPerfilComponent,
        DataPerfilComponent,
        ButtonCommonComponent
    ],
    providers: [],
})
export class MiPerfilModule { }
