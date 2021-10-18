import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateImageFondo } from 'src/app/services/update-image-fondo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {

  contador: number = 0;
  arrayImagesFondos: string[] = [
    'portada/portada1.png',
    'portada/portada2.png',
    'portada/portada3.png',
  ];
  setTimeConst: any;

  constructor(
    private router: Router,
    private updateImageFondo: UpdateImageFondo
  ) {
  }

  ngOnInit(): void {
    this.setImageFondo();
  }

  redirectPlans() {
    this.router.navigate(['plans']);
  };

  setImageFondo() {
    this.setTimeConst = setTimeout(() => {
      this.contador = this.contador > 2 ? 0 : this.contador;
      this.updateImageFondo.subject.next(this.arrayImagesFondos[this.contador]);
      this.contador++;
      this.setImageFondo();
    }, 3000);
  };

  ngOnDestroy() {
    clearTimeout(this.setTimeConst);
  };
}
