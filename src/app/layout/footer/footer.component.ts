/*
 * footer.compoments.ts
 * This file provides footer information.
 * @author: Jiayin Liu
 * Revised: 11/8/2020 add comments.
 *
 * 
 * Revised by Jiayin Liu on 12/10/2020.
 * Changing language
 */
import { Component, OnInit, HostListener, Input } from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
import { text } from '../../models/text';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  langs:{};//

  constructor(
    private pageInfoService: PageInfoService//
  ) { }

  ngOnInit(): void {

   
    this.langs = {
      a:{CN:'关于', EN:'About'},
      b:{CN:'CAA管理层',EN:'Leadership'},
      c:{CN:'CAA价值观',EN:'Our mission'},
      d:{CN:'新闻中心',EN:'Newscenter'},
      e:{CN:'隐私政策',EN:'Privacy Policy'},
      f:{CN:'使用条款', EN:'Term of use'},
      //--
      copyright:{CN:'2020 UCSC Chinese Alumni Association. 保留所有权利', EN:'2020 UCSC Chinese Alumni Association. All Rights Reserved'},
      declare:{CN:'加州大学圣克鲁兹分校学生会是一个依赖学生、校友、大学捐赠的非营利性组织', EN:'UCSC CAA is a self-funded nonprofit organization that relies on donations to provide programs and services that support students, alumni, and the University'},
      //--
      
    }
  
  }

  // @HostListener("document:scroll") changeFooter(){
  //   let footerNav = document.getElementById("footerNav");
  //   if(document.body.scrollTop>0||document.documentElement.scrollTop>0){
  //     footerNav.style.height = "80px";
  //     footerNav.style.lineHeight = "80px";

  //   } else {
  //     footerNav.style.height = "25px";
  //     footerNav.style.lineHeight = "25px";

  //   }
    
  // }
}
