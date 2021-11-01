import { Component, OnInit } from '@angular/core';
import { PropsBtn } from 'src/app/commons-components/button-common/button-common.component';
import { NavbarComponent, Props } from 'src/app/commons-components/navbar/navbar.component';
import { MisBalances } from 'src/app/models/mis-balances';
import { UpdateImageFondo } from 'src/app/services/update-image-fondo.service';

@Component({
  selector: 'app-data-perfil',
  templateUrl: './data-perfil.component.html',
  styleUrls: ['./data-perfil.component.scss']
})
export class DataPerfilComponent implements OnInit {

  propsNavbar: Props[] = [
    {
      text: 'Cambiar plan',
      class: 'col p-0',
      route: ''
    }
  ];

  propsBtn: PropsBtn[] = [
    {
      text: 'CONTRATAR PLAN',
      funcion: null,
      isInvert: false
    },
    {
      text: 'CONTRATAR PLAN',
      funcion: null,
      isInvert: false
    },
    {
      text: 'TRANSFERIR',
      funcion: null,
      isInvert: false
    },
    {
      text: 'CANCELAR',
      funcion: null,
      isInvert: true
    }
  ];

  misBalances: MisBalances[] = [
    {
      type: 'USDT',
      monto: '100,25',
      buttons: [
        {
          text: 'TRANSFERIR',
          funcion: null,
          isInvert: false
        },
        {
          text: 'CONTRATAR PLAN',
          funcion: null,
          isInvert: true
        }
      ]
    },
    {
      type: 'BTC',
      monto: '100,25',
      buttons: [
        {
          text: 'TRANSFERIR',
          funcion: null,
          isInvert: false
        }
      ]
    },
    {
      type: 'ETH',
      monto: '100,25',
      buttons: [
        {
          text: 'TRANSFERIR',
          funcion: null,
          isInvert: false
        }
      ]
    }
  ];

  constructor(
    private updateImageFonto: UpdateImageFondo
  ) {
    this.updateImageFonto.subject.next('');
  }

  ngOnInit(): void {
    NavbarComponent.subject.next(this.propsNavbar);

  }

}
