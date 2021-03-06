import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginRoutes } from './login.routing';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
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
