import { Component, OnInit } from '@angular/core';
import { UpdateImageFondo } from 'src/app/services/update-image-fondo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pathImageFondo: string = "usuario/fondo-SignLog@2x.png";

  constructor(
    private updateImageFonto: UpdateImageFondo
  ) {
    this.updateImageFonto.subject.next(this.pathImageFondo);
  }

  ngOnInit(): void {
  }

}
