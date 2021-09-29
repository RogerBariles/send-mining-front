import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UpdateImageFondo {

    pathImage: string = "portada/portada1.png";
    public subject: BehaviorSubject<string>;

    constructor() {
        this.subject = new BehaviorSubject(this.pathImage);
    }

}