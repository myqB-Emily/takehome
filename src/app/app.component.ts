import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.data.service';
import { combineLatest, concatAll, delay, filter, first, forkJoin, map, mergeMap, Observable, startWith, Subscription, switchMap, take, tap } from 'rxjs';
import { IDevice } from './interfaces/device.interface';
import { DeviceType } from './enums/device-types.enum';
import { LightState } from './enums/light-states.enum';
import { DoorState } from './enums/door-states.enum';
import { DoorStateDisplayMap } from './constants/door-state-display-map.constants';
import { LightStateDisplayMap } from './constants/light-state-display-map.constant';

@Component({
  selector: 'app-root',
  providers: [DeviceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  device$: Observable<IDevice[]> | undefined;
  devices: any[] = [];
  loading = true;
  private subscriptions: Subscription[] = [];
  private deviceStateSubscriptions: Subscription[] = [];

  constructor(private readonly deviceService: DeviceService) {}
 
  ngOnInit(): void {
    this.loadDevices();
    
  }

  private subscribeToDeviceStates(devices: any[]): void {
    this.deviceStateSubscriptions = devices.map(device =>
      this.deviceService.getDeviceStateDataStream(device).subscribe(state => {
        const deviceToUpdate = this.devices.find(d => d.id === device.id);
        if (deviceToUpdate) {
          deviceToUpdate.state = state;
        }
      })
    );
  }

  loadDevices()
  {
    this.deviceService.getDevices().pipe(
      switchMap(devices => {
        this.devices = devices;
        this.loading = false;
        this.subscribeToDeviceStates(devices);
        return [];
      })
    ).subscribe();
  }
  


  //function to load the devices
  loadDeviceTypeImg(state: any, deviceType: any)
  {
       if(deviceType === DeviceType.door)
       {
        return DoorStateDisplayMap[state]
       }
       else if(deviceType === DeviceType.light)
       {
         return LightStateDisplayMap[state]
       }
       else{
         return 'N/A'
       }
      
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

     
}
