import { Component, Input, OnInit } from '@angular/core';

export interface PropsBtn {
  text: string,
  funcion: any,
  isInvert: boolean
}

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.scss']
})
export class ButtonCommonComponent implements OnInit {

  @Input() props: PropsBtn;

  constructor() { }

  ngOnInit(): void {
  }

}
