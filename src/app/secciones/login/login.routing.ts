import { Routes } from "@angular/router";
import { CrearUsuarioComponent } from "./crear-usuario/crear-usuario.component";
import { LoginComponent } from "./login.component";

export const LoginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    // {
    //     path: 'create-user',
    //     component: CrearUsuarioComponent
    // }
];