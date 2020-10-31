import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll") changeHeader(){
    let headerTop = document.getElementById("header_top");
    if(document.body.scrollTop>0||document.documentElement.scrollTop>0){
      headerTop.style.height = "35px";
      headerTop.style.lineHeight = "35px";

    } else {
      headerTop.style.height = "70px";
      headerTop.style.lineHeight = "70px"
    }
    
  }
}
