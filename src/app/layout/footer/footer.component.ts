/*
 * footer.compoments.ts
 * This file provides footer information.
 * @author: Jiayin Liu
 * Revised: 11/8/2020 add comments.
 *
 */
import { Component, OnInit, HostListener, Input } from '@angular/core';//
import {PageInfoService} from '../../services/page-info.service';//
import { text } from '../../models/text';//

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() language:string;//
  langs:{};//

  constructor(
    private pageInfoService: PageInfoService//
  ) { }

  ngOnInit(): void {

    //--
    this.langs = {
      a:{CN:'关于', EN:'A'},
      b:{CN:'CAA管理层',EN:'B'},
      c:{CN:'新闻中心',EN:'C'},
      d:{CN:'隐私政策',EN:'D'},
      e:{CN:'使用条款', EN:'E'},
    }
    //--
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
