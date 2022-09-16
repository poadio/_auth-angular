import { Component, ElementRef, ViewChild } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  magic_mail: string = '';
  d: any = {};
  e: any = {};

  constructor(private readonly auth: Auth) {}
  async signInWithMagicLink() {
    //alert(this.magic_mail);
    this.auth.signInWithMagicLink(this.magic_mail);
  }
}
