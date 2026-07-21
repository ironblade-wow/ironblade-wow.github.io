import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private readonly http = inject(HttpClient);
  private readonly oauthUrl =
    'https://oauth.battle.net/token?grant_type=client_credentials';
  private readonly apiUrl = environment.apiUrl;
  private readonly clientId = environment.clientId;
  private readonly clientSecret = environment.clientSecret;
  private readonly redirectUri = environment.redirectUri;

  constructor() {
    this.getUserAuthorization().subscribe((response: any) => {
      localStorage.setItem('access_token', response.access_token); // Store the access token for future use
    });
  }

  getAccessToken(): string | null {
    const accessToken = localStorage.getItem('access_token');
    console.log('Access Token:', accessToken); // Log the access token to verify it's being retrieved correctly
    return accessToken;
  }

  private getUserAuthorization() {
    return this.http.post(
      this.oauthUrl,
      `client_id=${this.clientId}&client_secret=${this.clientSecret}&redirect_uri=${this.redirectUri}`,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );
  }
}