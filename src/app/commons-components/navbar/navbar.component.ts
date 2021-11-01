
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

export interface Props {
    text: string,
    class: string,
    route: string
};

@Component({
    selector: 'navbar-common',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {

    props: Props[] = [];

    // update titles
    subscripcion: Subscription;
    public static subject: BehaviorSubject<Props[]>;

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
        });
    };

    ngOnDestroy(): void {
        this.subscripcion.unsubscribe();
    };
};