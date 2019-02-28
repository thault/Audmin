import {Guest} from './guest';
import {Tier} from './tier';
import {Song} from './song';

export class Household {
  id: number;
  passcode: string;
  name: string;
  address: string;
  guestsRemaining: number;
  hasSubmitted: boolean;
  guests: Guest[];
  tier: Tier;
  songs: Song[];
}
