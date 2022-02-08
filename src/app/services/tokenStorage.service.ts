import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  // store data to session
  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)))
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Retrieve the data
  async get(storageKey: string) {
    const response = await Storage.get({
      key: storageKey
    })
    return JSON.parse(unescape(atob(response.value)))
  }

  // Remove storage
  async removeStorageItem(storageKey: string) {
    await Storage.remove({key: storageKey})
  }

  // clear storage
  async clear() {
    await Storage.clear();
  }
}