import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf} from "@angular/common";
import {DevicesService} from "../../services/devices.service";
import {TableModule} from 'primeng/table';
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    FormsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    RippleModule
  ],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent {
  constructor(protected devicesService: DevicesService) {
  }
  currentUser = JSON.parse(sessionStorage.getItem('0-angular-client') || '{}').userData?.name;
  Delete: string = '';

  openNew() {

  }

  deleteSelectedProducts() {

  }
}
