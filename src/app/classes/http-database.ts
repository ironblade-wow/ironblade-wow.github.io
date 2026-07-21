import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CredentialsService } from '../services/credentials-service';

export class HttpDatabase {
  private readonly accessToken;
  private readonly dataApiUrl = environment.dataApiUrl;
  private readonly namespace = environment.dynamicNamespace;
  private readonly locale = environment.locale;

  constructor(
    private _credentialsService: CredentialsService,
    private _httpClient: HttpClient,
  ) {
    this.accessToken = this._credentialsService.getAccessToken();
  }

  getData<T>(href: string) {
    const requestUrl =
      this.dataApiUrl +
      href +
      '?namespace=' +
      this.namespace +
      '&locale=' +
      this.locale;

    return this._httpClient.get<T>(requestUrl, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }
}