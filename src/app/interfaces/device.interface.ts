import { DeviceType } from '../enums/device-types.enum';
import { DoorState } from '../enums/door-states.enum';
import { LightState } from '../enums/light-states.enum';

export interface IDevice {
  id: number;
  type: DeviceType;
  name: string;
  online: boolean;
  state: LightState | DoorState;
}
