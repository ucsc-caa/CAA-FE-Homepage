import { Component, OnInit, HostListener,Input} from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
import {langFlag} from '../../models/header';

/* 
*@author: Peter Cai
*Revised:11/22/2020 modify import,constructor,ngOnInit()
*
*
*/

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  langs:{};

  constructor(
    private pageInfoService: PageInfoService
  ) {}

  ngOnInit(): void {
    //this.CN = this.pageInfoService.getLanguage();
    this.langs = {
      getinvolved:{CN:'捐赠', EN:'Give'},
      career:{CN:'新闻中心',EN:'Newscenter'},
      immigration:{CN:'新闻中心',EN:'Newscenter'},
    }
  }

  //lang_cn(){
    //this.CN = this.pageInfoService.getLanguage();
  //}
}
