import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlanesComponent } from './planes.component';
import { routesPlanes } from './planes.routing';

@NgModule({
    imports: [
        RouterModule.forChild(routesPlanes)
    ],
    exports: [],
    declarations: [
        PlanesComponent
    ],
    providers: [],
})
export class PlaneModule { }
