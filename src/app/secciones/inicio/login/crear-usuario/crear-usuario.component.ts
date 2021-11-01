import { Component, OnInit } from '@angular/core';
import { UpdateImageFondo } from 'src/app/services/update-image-fondo.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  pathImageFondo: string = "usuario/fondo-SignLog@2x.png";

  constructor(
    private updateImageFondo: UpdateImageFondo
  ) { }

  ngOnInit(): void {
    this.updateImageFondo.subject.next(this.pathImageFondo);
  }

}
