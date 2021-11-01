import { AfterContentChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent, Props } from './commons-components/navbar/navbar.component';
import { UpdateImageFondo } from './services/update-image-fondo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {

  @ViewChild('contentImage', { static: false }) contentImage: ElementRef;

  title = 'send-mining';
  basePathImage: string = '../../../assets/images/';
  pathImage: string;

  propsNavbar: Props[] = [
    {
      text: 'Home',
      class: 'col p-0',
      route: ''
    },
    {
      text: 'Universal Coins',
      class: '',
      route: 'https://www.universalcoins.net/'
    },
    {
      text: 'Login',
      class: '',
      route: 'auth'
    }
  ];

  constructor(
    private updateImageFondo: UpdateImageFondo,
    private renderer: Renderer2
  ) {
    this.pathImage = this.basePathImage.concat('portada/portada1.png');
  }

  ngOnInit(): void {
    NavbarComponent.subject.next(this.propsNavbar);
  };

  ngAfterContentChecked() {
    this.updateImageFondo.subject.subscribe(pathImage => {
      this.pathImage = this.basePathImage.concat(pathImage);

      this.renderer.setStyle(this.contentImage ? this.contentImage.nativeElement : null, 'background-image', 'url('.concat(this.pathImage).concat(')'));
    });
  }

  redirect(path: string) {
    this.updateImageFondo.subject.next('portada/portada1.png');
  }
}
