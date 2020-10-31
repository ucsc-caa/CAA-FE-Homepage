import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("document:scroll") changeHeader(){
    let headerContainer = document.getElementById("header-container");
    let logoContainer = document.getElementById("logo") as HTMLImageElement;
    if(document.body.scrollTop>0||document.documentElement.scrollTop>0){
      headerContainer.style.height = "110px";
      logoContainer.src = "/assets/image/small@3x.png";
      logoContainer.style.top ="10%";
      logoContainer.style.height = "70px";
      logoContainer.style.width = "70px";
    } else {
      headerContainer.style.height = "198px";
      logoContainer.style.top ="0%";
      logoContainer.src = "/assets/image/CN_large@3x.png";
      logoContainer.style.height = "198px";
      logoContainer.style.width = "198px";
    }
    
  }
  

}
