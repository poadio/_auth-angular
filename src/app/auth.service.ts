import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
} from '@omneedia/client-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private omneedia: OmneediaClient;

  constructor() {
    this.supabase = createClient(
      environment.omneedia_url,
      environment.omneedia_key
    );
  }

  get session() {
    return this.omneedia.auth.session();
  }

  get profile() {
    return this.omneedia
      .from('profiles')
      .select(`username, avatar_url`)
      .eq('id', this.user?.id)
      .single();
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.omneedia.auth.onAuthStateChange(callback);
  }

  signIn(email: string) {
    return this.omneedia.auth.signIn({ email });
  }

  signOut() {
    return this.omneedia.auth.signOut();
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      id: this.user?.id,
      updated_at: new Date(),
    };

    return this.supabase.from('profiles').upsert(update, {
      returning: 'minimal', // Don't return the value after inserting
    });
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file);
  }
}
