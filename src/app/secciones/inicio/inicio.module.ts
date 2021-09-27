import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Browser } from 'selenium-webdriver';

import { InicioComponent } from './inicio.component';
import { inicioRoutes } from './inicio.routing';

@NgModule({
    imports: [
        RouterModule.forChild(inicioRoutes)
    ],
    exports: [],
    declarations: [
        InicioComponent
    ],
    providers: [],
})
export class InicioModule { }
