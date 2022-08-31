import { Component } from '@angular/core';
import { OmneediaService } from './omneedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  d: any | null[] = [];

  constructor(private readonly omneedia: OmneediaService) {}

  async ngOnInit() {
    var { data, error } = await this.omneedia.get();
    this.d = data;
    console.log(data);
    console.log(error);
  }
}
