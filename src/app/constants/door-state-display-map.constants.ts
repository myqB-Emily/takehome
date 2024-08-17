import { DoorState } from '../enums/door-states.enum';

export const DoorStateDisplayMap:any = {
  [DoorState.closed]: 'https://placehold.co/60x60/000000/FFF?text=closed',
  [DoorState.opening]: 'https://placehold.co/60x60/acacac/FFF?text=opening',
  [DoorState.open]: 'https://placehold.co/60x60/3d7542/FFF?text=open',
  [DoorState.closing]: 'https://placehold.co/60x60/676767/FFF?text=closing',
};
