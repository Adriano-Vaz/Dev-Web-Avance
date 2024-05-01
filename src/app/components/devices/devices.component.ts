import {Component, OnInit} from '@angular/core';
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
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {PaginatorModule} from "primeng/paginator";
import {ConfirmDialogModule} from "primeng/confirmdialog";

interface Column {
  field: string;
  header: string;
}
interface Device {
  id?: string;
  userId?: string;
  name?: string;
  type?: string;
  brand?: string;
  ports?: number;
  network?: string;
  ip?: string;
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
    RippleModule,
    DialogModule,
    RadioButtonModule,
    PaginatorModule,
    ConfirmDialogModule
  ],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent implements OnInit {
  deviceDialog: boolean = false;
  device!: Device;
  devices!: Device[];
  submitted: boolean = false;

  constructor(protected devicesService: DevicesService)  {
  }
  currentUser = JSON.parse(sessionStorage.getItem('0-angular-client') || '{}').userData?.name;
  currentUserId = JSON.parse(sessionStorage.getItem('0-angular-client') || '{}').userData?.sub;
  Delete: string = '';

  openNew() {
    this.device = {};
    this.submitted = false;
    this.deviceDialog = true;
  }

  deleteSelectedProducts() {

  }

  ngOnInit(): void {
    this.devicesService.getProducts().then((data) => (this.devices = data));
  }

  hideDialog() {
    this.deviceDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.device.name?.trim()) {
      this.device.userId = this.currentUserId;
      this.devices.push(this.device);
      this.devices = [...this.devices];
      this.deviceDialog = false;
      this.device = {};
    }
  }
}
