import { Component, OnInit, HostListener,Input} from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';

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

  @Input() flag:any;

  constructor() { }

  

  ngOnInit(): void {

  }


  public getinvolved = ['志愿机会','Get Involved'];
  public career = ['工作机会','Career'];
  public immigration = ['移民咨询','Immigration'];

  lang_en(){
    this.flag = 1
  }

  lang_cn(){
    this.flag = 0
  }





}
