import { Component, OnInit, HostListener,Input,Output, EventEmitter} from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
import { text } from '../../models/text';
import { Router } from '@angular/router';

/*
 * header-top.component.ts
 *
 * This file provides header-top component.
 *
 * @author: Peter Cai
 * Revised:11/22/2020 modify import,constructor,ngOnInit()
 *
 * Revised:12/6/2020 add setLanguage() function
 * 
 * Revised: 12/11/2020 add setPagetype() function
 * 
 * Revised: 01/26/2021 delete setPagetype() function
 */

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {
  langs:{};

  constructor(private router: Router, private pageInfoService: PageInfoService) {}

  ngOnInit(): void {
    this.langs = {
      getinvolved:{CN:'志愿机会', EN:'Get Involved'},
      career:{CN:'工作机会',EN:'Career'},
      immigration:{CN:'移民咨询',EN:'Immigration'},
    }
  }

   /*
   * setLanguage
   * This method change language in app.component
   * @param lang: value of Language in app.component
   */

  setLanguage(lang: string): void {
    this.pageInfoService.setLanguage(lang);
  }

  navigation(path: string): void{
    this.router.navigate([path]);
  }
}
