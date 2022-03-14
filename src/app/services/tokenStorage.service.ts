import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private router: Router) {
    //initiate the store data function;
    this.storeData();
   }

  // load data to storage
  storeData() {
    Storage.get({key: USER_KEY}).then( res => {
      if(res.value) {
        this.currentUser.next(JSON.parse(res.value));
      }
      else {
        this.currentUser.next(false);
      }
    })
  }

  // get stored data
  getUser() {
    return this.currentUser.asObservable();
  }

  // log out data or user
  async logOut() {
    await Storage.remove({ key: USER_KEY });
    this.currentUser.next(false);
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  //check whether a user is permitted to view this page or not
  hasPermission(permissions: string[]): boolean {
    if(this.currentUser.value.permission) {
      console.log(this.currentUser.value)
      for(let permission of permissions) {
        if(!this.currentUser.value || !this.currentUser.value.permission.includes(permission)) return false;
      }
      return true;
    }
    else {
      return false;
    }
  }

  // store user data
  storeUser(user: any) {
    Storage.set({ key: USER_KEY, value: JSON.stringify(user)});
    this.currentUser.next(user);
  }




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