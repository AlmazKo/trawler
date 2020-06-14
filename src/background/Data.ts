export interface Values {
  total_blocked: number;
}

const DB = chrome.storage.local;

export class Data {

  static get<K extends keyof Values>(key: K): Promise<Partial<Values[K]>> {
    return new Promise((resolve, reject) => {
      DB.get(key, (data) => {
        const value = data[key];
        if (value === null) {
          reject();
        } else {
          resolve(value);
        }
      });
    });
  }

  static set<K extends keyof Values>(key: K, value: Values[K]) {
    DB.set({key: value}, () => {
      console.log("Set!! " + key, value)
    });
  }
}

