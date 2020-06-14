import { Data } from './data';

type key = number | string;
// https://jrgraphix.net/r/Unicode/2800-28FF
const CODES = {

  0: '⡇',
  1: '⣆',
  2: '⣤',
  3: '⠼',
  4: '⢸',
  5: '⠹',
  6: '⠛',
  7: '⠏',
};


export class Counters<T extends key> {
  private readonly values = new Map<T, number>();

  total = 0;
  _total = 0;
  updater: any = null;

  constructor() {
    Data.get('total_blocked').then(t => {
      if (t + 0 === t) {
        this.total = t
        this._total = t
      }
    });

    chrome.browserAction.setBadgeBackgroundColor({color: '#980a0a'});
  }

  get(key: T): number {
    return this.values.get(key) || 0;
  }

  inc(key?: T) {
    this.total++;
    this.updateLoader();
    if (key) {
      let val = this.values.get(key) || 0;
      this.values.set(key, val + 1);
    }

    Data.set('total_blocked', this.total);
  }

  private updateLoader() {
    if (this.updater !== null) return;
    this.nextDraw();
  }

  private nextDraw() {
    this.updater = setTimeout(() => {
      this._total++;
      // @ts-ignore
      const loader: any = CODES[this._total % 8];
      chrome.browserAction.setBadgeText({text: loader});
      if (this._total < this.total) {
        this.nextDraw()
      } else {
        this.updater = null;
      }
    }, 200)
  }
}
