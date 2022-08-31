import { Injectable } from '@angular/core';
import { createClient, OmneediaClient } from '@omneedia/client-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OmneediaService {
  private omneedia: OmneediaClient;

  constructor() {
    this.omneedia = createClient(
      environment.omneedia_url,
      environment.omneedia_key
    );
  }

  public async get() {
    return this.omneedia.from('countries').select();
  }
}
