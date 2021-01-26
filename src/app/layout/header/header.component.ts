import { Component, OnInit, Input,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/*
* author: Holly Hao
* Date Revised: 2021/1/5
* Change the height and lineHeight of headerNav and headerTop
*
*
* author : Peter Cai
* date : 2020/11/8
* Create headerTop and headerNav
*
* author: Yiyun Zheng
* Date Revised: 2021/1/24
* Move Header change function to main
*/


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() language: string;
  @Output() setLang = new EventEmitter<boolean>();
  
  setLanguage(event) {
    this.setLang.emit(event);
  }


  constructor(
  ) { }

  ngOnInit(): void {
  }


  public flag:number = 0

}
