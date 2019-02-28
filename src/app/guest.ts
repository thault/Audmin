import {Dietary} from './dietary';

export class Guest {
  householdId: number;
  tableNo: number;
  isPlusOne: boolean;
  isRSVPed: boolean;
  dieataryRestritions: Dietary[];
}
