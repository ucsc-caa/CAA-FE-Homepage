import { viewClassName } from '@angular/compiler';
import { Component, OnInit, HostListener, Input,ViewChild, EventEmitter, Output} from '@angular/core';

/*
* author: Holly Hao
* Date Revised: 2021/1/5
* Change the height and lineHeight of headerNav and headerTop
*
*
* author : Peter Cai
* date : 2020/11/8
* Create headerTop and headerNav
*/


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() language: string;
  @Output() setLang = new EventEmitter<boolean>();
  @Output() setPage = new EventEmitter<boolean>();
  
  setLanguage(event) {
    this.setLang.emit(event);
  }

  setPagetype(event) {
    this.setPage.emit(event);
  }


  constructor() { }

  ngOnInit(): void {
  }
  /*
  * changeHeader()
  * Handle header animation.
  */
  @HostListener("document:scroll") changeHeader(){
    let headerContainer = document.getElementById("header-container");
    let logoContainer = document.getElementById("logo") as HTMLImageElement;
    let headerNav = document.getElementById("headerNav");
    let headerTop = document.getElementById("headerTop");
    if(document.body.scrollTop>0||document.documentElement.scrollTop>0){
      headerContainer.style.height = "110px";
      logoContainer.src = "/assets/image/small_logo.png";
      logoContainer.style.top ="10%";
      logoContainer.style.height = "70px";
      logoContainer.style.width = "70px";

      headerNav.style.height = "80px";
      headerNav.style.lineHeight = "15px";

      headerTop.style.height = "35px";
      headerTop.style.lineHeight = "5px";
    } else {
      headerContainer.style.height = "198px";
      logoContainer.style.top ="0%";
      logoContainer.src = "/assets/image/CN_logo.png";
      logoContainer.style.height = "198px";
      logoContainer.style.width = "198px";

      headerNav.style.height = "90px";
      headerNav.style.lineHeight = "25px";

      headerTop.style.height = "60px";
      headerTop.style.lineHeight = "20px"
    }
    
  }

  public flag:number = 0

}
