import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthService {
     private users: any[] = [];

     constructor() {
       const savedUsers = localStorage.getItem('users');
       if (savedUsers) {
         this.users = JSON.parse(savedUsers);
       }
     }

     register(username: string, email: string, password: string): void {
       this.users.push({ username, email, password });
       localStorage.setItem('users', JSON.stringify(this.users));
     }

     login(email: string, password: string): boolean {
       const user = this.users.find(u => u.email === email && u.password === password);
       return !!user;
     }
   }