import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface PropsBtn {
  text: string,
  funcion: () => void,
  isInvert: boolean
}

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.scss']
})
export class ButtonCommonComponent implements OnInit {

  @Input() props: PropsBtn;
  @Output() clickProps = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    this.clickProps.emit(this.props.funcion);
  }

}
