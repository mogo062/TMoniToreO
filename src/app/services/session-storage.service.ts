import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }


  get(key : string, fallback : any){
    let value = sessionStorage.getItem(key);

    return (value) ? JSON.parse(value) : fallback;
  }
  set(key: string, value : any){
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  remove(key : string) {
    sessionStorage.removeItem(key);
  }


}
