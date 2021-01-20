import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
import { text } from '../../models/text';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router'
import {RouterLinkActive} from '@angular/router'

/*
 * header-nav.component.ts
 *
 * This file provides header-nav component.
 *
 * @author: Peter Cai
 * Revised: 12/11/2020 add setPagetype() function
 * Revised: 01/20/2021 add activeUrl and changed header-nav styled
 */

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  @Input() language:string;
  @Output() setPage = new EventEmitter<string>();
  activeUrl: string;

  langs:{};
  
  constructor(
    private pageInfoService: PageInfoService,
    public route:ActivatedRoute,
    public router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.activeUrl = event.url;
      }
    })
  }

  ngOnInit(): void {
    this.langs = {
      give:{CN:'捐赠', EN:'Give'},
      newscenter:{CN:'新闻中心',EN:'Newscenter'},
      connect:{CN:'校友联络',EN:'Connect'},
      community:{CN:'校友社区',EN:'Community'},
      merchandise:{CN:'商品', EN:'Merchandise'},
      membership:{CN:'会员',EN:'Membership'},
      about:{CN:'关于',EN:'About'},
      join:{CN:'加入',EN:'Join'}
    }
  }


   /*
   * setPagetype
   * This method change pageType in app.component
   * @param page: value of pageType in app.component
   */

  // setPagetype(page:string): void {
  //   this.setPage.emit(page);
  // }

}


