import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateImageFondo } from 'src/app/services/update-image-fondo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pathImageFondo: string = "usuario/fondo-SignLog@2x.png";

  formUser: FormGroup;

  constructor(
    private updateImageFonto: UpdateImageFondo,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateImageFonto.subject.next(this.pathImageFondo);
  }

  ngOnInit(): void {

    // INITIALIZATION FORM LOGIN
    this.formUser = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmitForm() {
    this.router.navigate(['profile']);
  }
}
