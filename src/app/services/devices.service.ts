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
    this.httpClient.get("/api/devices/" + JSON.parse(sessionStorage.getItem('0-angular-client') || '{}').userData?.sub).subscribe((devices: any) => {
      this.deviceArray = devices;
      console.log(this.deviceArray)
    });
  }
  getAllDevices() {
    return this.deviceArray;
  }

  getProducts() {
    return Promise.resolve(this.getAllDevices());
  }
}
