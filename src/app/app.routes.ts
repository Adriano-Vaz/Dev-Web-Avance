import { Routes } from '@angular/router';
import {DevicesComponent} from "./components/devices/devices.component";
import {AccountComponent} from "./components/account/account.component";

export const routes: Routes = [
  {path: "devices", component: DevicesComponent},
  {path: "account", component: AccountComponent},
  {path: "**", redirectTo: "devices"}
];
