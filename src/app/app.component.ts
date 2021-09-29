import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateImageFondo } from './services/update-image-fondo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'send-mining';
  basePathImage: string = '../../../assets/images/';
  pathImage: string;

  constructor(
    private updateImageFondo: UpdateImageFondo,
    private router: Router
  ) {
    this.pathImage = this.basePathImage.concat('portada/portada1.png');
  }

  ngOnInit(): void {
    this.updateImageFondo.subject.subscribe(pathImage => {
      this.pathImage = this.basePathImage.concat(pathImage);
    });
  };

  redirect(path: string) {
    this.updateImageFondo.subject.next('portada/portada1.png');
  }
}
