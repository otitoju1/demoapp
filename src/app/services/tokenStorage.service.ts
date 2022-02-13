import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins
const USER_KEY = 'auth-user';
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

  public saveUser(storageKey: string, user: any): void {
    window.sessionStorage.removeItem(storageKey);
    window.sessionStorage.setItem(storageKey, JSON.stringify(user));
  }

  public saveQR(storageKey: string, user: any): void {
    window.sessionStorage.setItem(storageKey, user);
  }

  public getToken(KEY:any) {
    return window.sessionStorage.getItem(KEY);
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