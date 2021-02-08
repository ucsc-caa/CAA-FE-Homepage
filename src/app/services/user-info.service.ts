import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import userInfo from './user-data.json';

/*
 * user-info.service.ts
 *
 * This file provides user information for other files to communicate or generate pages.
 *
 * @author: Peter Cai
 * Revised: 12/23/2020 Create file
 * Revised: 12/25/2020 Add login function
 */

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:3010/v0/auth', {
      email,
      password
    });
  }

  getUserInfo(email: string) {
    return this.http.get(`http://localhost:3010/v0/user?email=${encodeURIComponent(email)}`)
  }
}
