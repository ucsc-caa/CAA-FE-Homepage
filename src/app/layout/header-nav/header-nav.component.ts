import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("document:scroll") changeHeader(){
    let headerNav = document.getElementById("Header-nav");
    if(document.body.scrollTop>0||document.documentElement.scrollTop>0){
      headerNav.style.height = "60px";
      headerNav.style.lineHeight = "60px";

    } else {
      headerNav.style.height = "80px";
      headerNav.style.lineHeight = "80px"
    }
    
  }

}
