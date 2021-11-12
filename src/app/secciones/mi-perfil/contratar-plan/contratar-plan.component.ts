import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PropsBtn } from 'src/app/commons-components/button-common/button-common.component';
import { UpdateImageFondo } from 'src/app/services/update-image-fondo.service';

@Component({
  selector: 'app-contratar-plan',
  templateUrl: './contratar-plan.component.html',
  styleUrls: ['./contratar-plan.component.scss']
})
export class ContratarPlanComponent implements OnInit {

  @ViewChild('btnCloseModal', { static: true }) btnCloseModal: ElementRef;
  @ViewChild('btnModal', { static: true }) btnModal: ElementRef;

  planes = [
    {
      title: 'SINGLE',
      velocidad: '1 TH/s',
      feedback: '6 hs',
      asistencia: 'OK',
      btnProps: [
        {
          text: 'SELECCIONAR',
          funcion: () => { this.seleccionarBtn() },
          isInvert: false
        },
        {
          text: 'VER MAS INFO',
          funcion: () => { },
          isInvert: true
        }
      ]
    },
    {
      title: 'FASTER',
      velocidad: '2 TH/s',
      feedback: '12 hs',
      asistencia: 'OK',
      btnProps: [
        {
          text: 'SELECCIONAR',
          funcion: () => { this.seleccionarBtn() },
          isInvert: false
        },
        {
          text: 'VER MAS INFO',
          funcion: () => { },
          isInvert: true
        }
      ]
    },
    {
      title: 'POWER',
      velocidad: '3 TH/s',
      feedback: 'Tiempo real',
      asistencia: 'OK',
      btnProps: [
        {
          text: 'SELECCIONAR',
          funcion: () => { this.seleccionarBtn() },
          isInvert: false
        },
        {
          text: 'VER MAS INFO',
          funcion: () => { },
          isInvert: true
        }
      ]
    }
  ];

  propsBtn: PropsBtn[] = [
    {
      text: 'PAGAR',
      funcion: () => { },
      isInvert: false
    },
    {
      text: 'CANCELAR',
      funcion: () => { this.cancelar('cerrarModal') },
      isInvert: true
    }
  ];

  constructor(
    private updateImageFonto: UpdateImageFondo
  ) { }

  ngOnInit(): void {
    this.updateImageFonto.subject.next('');
  };

  clickButtonGeneric(event: Function): void {
    // LLAMAMOS A LA FUNCION CORRESPONDIENTE AL BOTTON
    event.call(event);
  }

  cancelar(event: string): void {
    if (event == 'cerrarModal') {
      this.btnCloseModal.nativeElement.click();
    }
  };

  seleccionarBtn(): void {
    this.btnModal.nativeElement.click();
  };

}
