import { AfterContentChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
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

  propsNavbar: Props =
    {
      theamWhite: false,
      navigation: [
        {
          text: 'Home',
          route: ''
        },
        {
          text: 'Universal Coins',
          route: 'https://www.universalcoins.net/'
        },
        {
          text: 'Login',
          route: 'auth'
        }
      ]
    };

  propsNavbarProfile: Props = {
    theamWhite: true,
    navigation: [
      {
        text: 'Cambiar plan',
        route: ''
      },
      {
        text: 'notifications.svg',
        route: ''
      },
      {
        text: 'perfil.svg',
        route: ''
      }
    ]
  };

  constructor(
    private updateImageFondo: UpdateImageFondo,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.pathImage = this.basePathImage.concat('portada/portada1.png');
  }

  ngOnInit(): void {
    this.middelwateRouter();
    // NavbarComponent.subject.next(this.propsNavbar);
  };

  ngAfterContentChecked() {
    this.updateImageFondo.subject.subscribe(pathImage => {
      this.pathImage = this.basePathImage.concat(pathImage);

      this.renderer.setStyle(this.contentImage ? this.contentImage.nativeElement : null, 'background-image', 'url('.concat(this.pathImage).concat(')'));
    });
  }

  redirect(path: string) {
    this.updateImageFondo.subject.next('portada/portada1.png');
  };

  // ------------------------------------------------------
  // SETEAMOS OPCIONES DEL NAVBAR SEGUN CORRESPONDA LA RUTA
  middelwateRouter(): void {
    this.router.events.subscribe((value: RouterEvent) => {
      if (value.url == undefined) return;
      if (value.url?.indexOf('profile') != -1)
        NavbarComponent.subject.next(this.propsNavbarProfile);
      else
        NavbarComponent.subject.next(this.propsNavbar);
    });
  };
}
