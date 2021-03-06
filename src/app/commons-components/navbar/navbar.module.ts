import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        CommonModule
    ],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
    providers: [],
})
export class NavbarCommonModule { }
