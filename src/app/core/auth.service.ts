import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // isAuthenticated = false;

  constructor() { }

  // login() {
  //   this.isAuthenticated = true;
  // }

  // logout() {
  //   this.isAuthenticated = false;
  // }

  logout(): void {
    // perform logout operation and remove the auth token from session storage
    sessionStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // check if the auth token is present in session storage
    return !!sessionStorage.getItem('token');
  }
}
