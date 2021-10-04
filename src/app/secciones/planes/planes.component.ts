import { Component, OnInit } from '@angular/core';
import { UpdateImageFondo } from 'src/app/services/update-image-fondo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  baseImage: string = 'planes/fondo-planes.png';

  constructor(
    private updateImageFondo: UpdateImageFondo
  ) {
    this.updateImageFondo.subject.next(this.baseImage);
  }

  ngOnInit(): void {
  }

}
