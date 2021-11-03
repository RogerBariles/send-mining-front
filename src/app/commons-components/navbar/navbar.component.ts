
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

export interface Props {
    theamWhite: boolean,
    navigation: Navigation[]
};

export interface Navigation {
    text: string,
    isImagen?: boolean
    route: string
}
@Component({
    selector: 'navbar-common',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {

    baseImagenLogos: string = "../../../assets/images/logos/";
    props: Props;

    // update titles
    subscripcion: Subscription;
    public static subject: BehaviorSubject<Props>;

    constructor() {
        NavbarComponent.subject = new BehaviorSubject(this.props);
    }

    ngOnInit() {
        this.subscribeProps();
    }

    // SUBSCRIPCION A PROPS
    subscribeProps(): void {
        this.subscripcion = NavbarComponent.subject.subscribe(updateProps => {
            this.props = updateProps;
            let expreReg = new RegExp('(.svg|.png|.jpg)')

            this.props.navigation.forEach(unaNavegacion => {
                if (expreReg.test(unaNavegacion.text)) {
                    unaNavegacion.isImagen = true;
                    unaNavegacion.text = this.baseImagenLogos.concat(unaNavegacion.text);
                }
            })
        });
    };

    ngOnDestroy(): void {
        this.subscripcion.unsubscribe();
    };
};