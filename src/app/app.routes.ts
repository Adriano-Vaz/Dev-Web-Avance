import { Routes } from '@angular/router';
import {LightPageComponent} from "./components/light-page/light-page.component";
import {RacinePageComponent} from "./components/racine-page/racine-page.component";
import {NetworksComponent} from "./components/networks/networks.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";

export const routes: Routes = [
  {path: "racine", component: RacinePageComponent},
  {path: "light", component: LightPageComponent},
  {path: "networks", component: NetworksComponent},
  {path: "authentication", component: AuthenticationComponent},
  {path: "**", redirectTo: "light"}
];
