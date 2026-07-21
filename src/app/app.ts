import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'wow-gilde';
  protected readonly authApi = 'https://oauth.battle.net/authorize';
  protected readonly state = 'testState';
  protected readonly redirect_uri = 'https://localhost:4200';
  protected readonly loginHref =
    this.authApi +
    '?response_type=code&scope=openid&state=' +
    this.state +
    '&redirect_uri=' +
    this.redirect_uri +
    '&client_id=' +
    environment.clientId;
    code: string | null = null;
    urlState: string | null = null;

    private route = inject(ActivatedRoute);

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.code = params['code'];
        this.urlState = params['state'];
      });
    }
}