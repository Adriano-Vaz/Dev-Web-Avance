import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  name = JSON.parse(sessionStorage.getItem('0-angular-client') || '{}').userData?.name;
  email = JSON.parse(sessionStorage.getItem('0-angular-client') || '{}').userData?.email;
  appComponent: AppComponent;

  constructor(appComponent : AppComponent) {
    this.appComponent = appComponent;
  }

  logout() {
    this.appComponent.logout();
  }
}
