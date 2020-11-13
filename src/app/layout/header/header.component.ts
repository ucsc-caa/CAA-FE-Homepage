import { Component, OnInit, HostListener} from '@angular/core';

/*
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
      headerNav.style.height = "60px";
      headerNav.style.lineHeight = "60px";

      headerTop.style.height = "35px";
      headerTop.style.lineHeight = "35px";
    } else {
      headerContainer.style.height = "198px";
      logoContainer.style.top ="0%";
      logoContainer.src = "/assets/image/CN_logo.png";
      logoContainer.style.height = "198px";
      logoContainer.style.width = "198px";
      headerNav.style.height = "80px";
      headerNav.style.lineHeight = "80px";
      headerTop.style.height = "70px";
      headerTop.style.lineHeight = "70px"
    }
    
  }
  

}
