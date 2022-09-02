import { Component } from '@angular/core';
import { Auth } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  session = this.auth.session;
  constructor(private readonly auth: Auth) {}
  ngOnInit() {
    this.auth.authChanges((_, session) => (this.session = session));
  }
}
