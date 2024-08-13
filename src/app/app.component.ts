import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.data.service';
import { Observable, tap } from 'rxjs';
import { IDevice } from './interfaces/device.interface';

@Component({
  selector: 'app-root',
  providers: [DeviceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  device$: Observable<IDevice[]> | undefined;
  constructor(private readonly deviceService: DeviceService) {}

  /*
  Given the available functions on the DeviceService, which works as an emulator for api 
  calls, create a display grid of devices. The grid should display devices in a card
  format with a border around them, they should be arranged left to right and overflow
  onto the next line using modern css to help arrange the elements neatly.

  There is a load time to the get devices call, when the devices haven't been loaded
  yet show a placeholder for loading.

  You have a call available that gives you an observable stream that continually
  gives you device state when you pass an individual device. Once you have your list of
  devices displayed you should get the data stream for each device so you can actively 
  update their states.

  use the following methods:
  
  dataService.getDevices()  
    //gives you an observable that gives you all of your devices
  dataService.getDeviceStateDataStream() 
    //gives you an observable event stream of a given device that continually outputs
    state information

  use the following constant files for your device state images:
  constants/door-state-display-map.constants.ts
  constants/light-state-display-map.constant.ts

  fields that should be displayed in the device grid:
  name
  type
  state (mapped to the image maps provided above)
  */
}
