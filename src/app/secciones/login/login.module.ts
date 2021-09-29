import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

@NgModule({
    imports: [
        RouterModule.forChild(LoginRoutes)
    ],
    exports: [],
    declarations: [
        LoginComponent,
        CrearUsuarioComponent
    ],
    providers: [],
})
export class LoginModule { }
