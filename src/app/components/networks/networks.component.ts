import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf} from "@angular/common";
import {NetworksService} from "../../services/networks.service";

@Component({
  selector: 'app-networks',
  standalone: true,
    imports: [
        NgClass,
        NgForOf,
        NetworksComponent,
        FormsModule
    ],
  templateUrl: './networks.component.html',
  styleUrl: './networks.component.css'
})
export class NetworksComponent {
  network: any = {
    name: "",
    location: "",
    lastModified: ""
  }
  constructor(protected networkService: NetworksService) {
  }



}
