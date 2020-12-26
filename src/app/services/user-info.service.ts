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

  constructor() {
  }

  login() {
    return of(userInfo);
  }
}
