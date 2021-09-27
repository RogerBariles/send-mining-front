import { Component } from "@angular/core";
import { Router, Routes } from "@angular/router";
import { InicioComponent } from "./inicio.component";

export const inicioRoutes: Routes = [
    {
        path: '',
        component: InicioComponent
    }
];