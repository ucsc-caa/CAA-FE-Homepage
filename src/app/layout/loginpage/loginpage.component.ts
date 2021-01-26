import { UserInfoService } from './../../services/user-info.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/*
 * loginpage.component.ts
 *
 * This file provides loginpage component.
 *
 * @author: Peter Cai
 * Revised: 12/23/2020 Created this file
 * Revised: 1/3/2020 Modified login logic
 */

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  @Output() close = new EventEmitter(); 
  @Output() loginSuccess = new EventEmitter();

  email = '';
  password = '';
  remember = false;

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    // 判断用户是否记住登录了，如果记住登录则直接跳转或者做下一步操作
    let rememberUser: any = localStorage.getItem('RememberUser');
    if (rememberUser) {
      rememberUser = JSON.parse(rememberUser);
      if (rememberUser.isRemember) {
        // TODO: 跳转或做下一步操作
        console.log('redirect');
        this.email = rememberUser.email;
        this.password = rememberUser.password;
        this.remember = rememberUser.isRemember;
      } else {
        // 显示用户名
        this.email = rememberUser.email;
      }
    }
  }

  login(): void {
    this.userInfoService.login(this.email, this.password).subscribe((res: any) => {
      if (res.id) {
        // login success
        console.log("success")
        const rememberUser = {
          ...res,
          isRemember: this.remember
        }
        localStorage.setItem('RememberUser', JSON.stringify(rememberUser));
        localStorage.setItem('currentUser', JSON.stringify(rememberUser));
        this.loginSuccess.emit(rememberUser);
        this.close.emit();
      } else {
        // login fail
        console.log("fail")
      }
    })
  }
}
