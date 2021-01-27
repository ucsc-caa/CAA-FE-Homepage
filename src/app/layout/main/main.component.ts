/*
* main.components.ts
* 
* This file provides main components
*
* @author: Holly Hao
*
* author: Yiyun Zheng
* Date Revised: 2021/1/24
* Move Header change function to main
*
*/

import { Component, HostListener,OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    let headerContainer = document.getElementById("header-container");
    let logoContainer = document.getElementById("logo") as HTMLImageElement;
    let headerNav = document.getElementById("headerNav");
    let headerTop = document.getElementById("headerTop");

    headerContainer.style.height = "198px";
    logoContainer.style.top ="0%";
    logoContainer.src = "/assets/image/CN_logo.png";
    logoContainer.style.height = "198px";
    logoContainer.style.width = "198px";

    headerNav.style.height = "90px";
    headerNav.style.lineHeight = "90px";

    headerTop.style.height = "60px";
    headerTop.style.lineHeight = "20px"
  }

  ngOnDestroy(): void {
    let headerContainer = document.getElementById("header-container");
    let logoContainer = document.getElementById("logo") as HTMLImageElement;
    let headerNav = document.getElementById("headerNav");
    let headerTop = document.getElementById("headerTop");
  
    headerContainer.style.height = "110px";
    logoContainer.src = "/assets/image/small_logo.png";
    logoContainer.style.top ="10%";
    logoContainer.style.height = "70px";
    logoContainer.style.width = "70px";

    headerNav.style.height = "60px";
    headerNav.style.lineHeight = "60px";

    headerTop.style.height = "35px";
    headerTop.style.lineHeight = "5px";
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
    headerTop.style.lineHeight = "5px";

  } else {
    headerContainer.style.height = "198px";
    logoContainer.style.top ="0%";
    logoContainer.src = "/assets/image/CN_logo.png";
    logoContainer.style.height = "198px";
    logoContainer.style.width = "198px";

    headerNav.style.height = "90px";
    headerNav.style.lineHeight = "90px";

    headerTop.style.height = "60px";
    headerTop.style.lineHeight = "20px"

  }
  
}


}
