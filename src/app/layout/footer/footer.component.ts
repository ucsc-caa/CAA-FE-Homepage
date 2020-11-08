import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
