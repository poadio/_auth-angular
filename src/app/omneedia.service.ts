import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  createClient,
  Session,
  OmneediaClient,
} from '@omneedia/client-js';
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
  get session() {
    return this.omneedia.auth.session();
  }
  public async signInWithGithub() {
    return this.omneedia.auth.signIn({
      provider: 'github',
    });
  }
  public async signInWithEmail(email: string, password: string) {
    return this.omneedia.auth.signIn({
      email: email,
      password: password,
    });
  }
  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.omneedia.auth.onAuthStateChange(callback);
  }
}
