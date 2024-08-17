import { Injectable } from '@angular/core';
import { Observable, delay, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import deviceData from '../../../data/devices.json';
import { IDevice } from '../interfaces/device.interface';
import { LightState } from '../enums/light-states.enum';
import { DoorState } from '../enums/door-states.enum';
import { DeviceType } from '../enums/device-types.enum';

@Injectable()
export class DeviceService {
  constructor() {}

  public getDevices(): Observable<IDevice[]> {
    //do not touch this code this is merely to emulate calling an api
    return of(deviceData as IDevice[]).pipe(delay(3000));
  }


  
  public getDeviceStateDataStream(
    device: IDevice
  ): Observable<LightState | DoorState> {
    //do not touch this code this is merely to emulate calling an SSE api
    const emitInterval = this.randomIntFromRange(20000, 100000);
    return interval(emitInterval).pipe(
      map(() => {
        if (device.type === DeviceType.light) {
          return this.randomIntFromRange(0, 1);
        } else {
          return this.randomIntFromRange(0, 3);
        }
      })
    );
  }

  private randomIntFromRange(min: number, max: number): number {
    // do not touch this code
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
