import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf} from "@angular/common";
import {DevicesService} from "../../services/devices.service";
import { TableModule } from 'primeng/table';
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    DevicesComponent,
    FormsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule
  ],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent {
  devices: any = {
    name: "",
    type: "",
    brand: "",
    ports: "",
    network: "",
    ip: ""
  }
  constructor(protected devicesService: DevicesService) {
  }
}
