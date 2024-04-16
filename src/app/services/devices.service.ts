import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private deviceArray: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.refreshDevices();
  }
  refreshDevices(){
    this.httpClient.get("/api/devices").subscribe((devices: any) => {
      this.deviceArray = devices;
    });
  }
  getAllDevices() {
    return this.deviceArray;
  }
}
