import { Routes } from '@angular/router';
import {LightPageComponent} from "./components/light-page/light-page.component";
import {RacinePageComponent} from "./components/racine-page/racine-page.component";
import {DevicesComponent} from "./components/devices/devices.component";
import {AccountComponent} from "./components/account/account.component";

export const routes: Routes = [
  {path: "light", component: LightPageComponent},
  {path: "devices", component: DevicesComponent},
  {path: "account", component: AccountComponent},
  {path: "**", redirectTo: "devices"}
];
