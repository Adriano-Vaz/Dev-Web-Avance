import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {LightPageComponent} from "./components/light-page/light-page.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LightPageComponent, AuthenticationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Network Manager';
  private readonly oidcSecurityService = inject(OidcSecurityService);

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData}) => {
      console.log(isAuthenticated);
      console.log(userData);
      if (isAuthenticated) {
        console.log("User is authenticated");
        console.log("User data: ", userData);
      } else {
        console.log("User is not authenticated");
        this.login()
      }
    }/* ... */);
  }

  login() {
    this.oidcSecurityService.authorize();
    console.log("login loop");
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
}
