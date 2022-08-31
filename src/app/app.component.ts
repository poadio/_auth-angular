import { Component } from '@angular/core';
import { OmneediaService } from './omneedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  session = this.omneedia.session;

  constructor(private readonly omneedia: OmneediaService) {}

  async ngOnInit() {
    this.omneedia.authChanges((_, session) => (this.session = session));
  }
}
