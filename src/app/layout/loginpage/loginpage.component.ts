import { UserInfoService } from './../../services/user-info.service';
import { Component, OnInit } from '@angular/core';

/*
 * loginpage.component.ts
 *
 * This file provides loginpage component.
 *
 * @author: Peter Cai
 * Revised: 12/23/2020 Created this file
 */

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  username = '';
  password = '';
  remember = false;

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userInfoService.login().subscribe(res => {
      const users = res['users'];
      const user = users.filter(user => user.username === this.username && user.password === this.password);
      if (user.length > 0) {
        // login success
        console.log("success")
        if (this.remember) {
          localStorage.setItem('token', JSON.stringify(user));
        }
      } else {
        // login fail
        console.log("fail")
      }
    })
  }
}
