import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('btnCloseModal', { static: true }) btnCloseModal: ElementRef;
  @ViewChild('btnModal', { static: true }) btnModal: ElementRef;

  propsNavbar: Props = {
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

  propsBtn: PropsBtn[] = [
    {
      text: 'CONTRATAR PLAN',
      funcion: () => { this.contratarPlan() },
      isInvert: false
    },
    {
      text: 'CONTRATAR PLAN',
      funcion: () => { this.contratarPlan() },
      isInvert: false
    },
    {
      text: 'TRANSFERIR',
      funcion: () => { this.transferir() },
      isInvert: false
    },
    {
      text: 'CANCELAR',
      funcion: () => { this.cancelar('cerrarModal') },
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
          funcion: () => { this.transferir() },
          isInvert: false
        },
        {
          text: 'CONTRATAR PLAN',
          funcion: () => { this.contratarPlan() },
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
          funcion: () => { this.transferir() },
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
          funcion: () => { this.transferir() },
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

  clickButtonGeneric(event: Function): void {
    // LLAMAMOS A LA FUNCION CORRESPONDIENTE AL BOTTON
    event.call(event);
  }

  transferir(): void {
    this.btnModal.nativeElement.click();
  }

  contratarPlan(): void {
    debugger
  }

  cancelar(event: string): void {
    if (event == 'cerrarModal') {
      this.btnCloseModal.nativeElement.click();
    }
  }
}