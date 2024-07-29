import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private adminUser = { username: 'admin', password: 'admin123', type: 'admin', fullName: 'Admin User' };

  constructor() {
    this.initializeAdmin();
  }

  private initializeAdmin() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([this.adminUser]));
    }
  }

  registerUser(user: any) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  loginUser(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logoutUser() {
    localStorage.removeItem('loggedInUser');
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }

  isAdmin() {
    const user = this.getLoggedInUser();
    return user && user.type === 'admin';
  }
}
