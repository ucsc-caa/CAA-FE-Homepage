import { Component, OnInit, HostListener, Input } from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
import {langFlag} from '../../models/header';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  //content = this.pageInfoService.getLanguage();

  langs1:{};
  langs2:{};
  langs3:{};
  
  constructor(
    private pageInfoService: PageInfoService
  ) {}

  ngOnInit(): void {
    this.langs1 = {
      give:{CN:'捐赠', EN:'Give'},
      newscenter:{CN:'新闻中心',EN:'Newscenter'},
      connect:{CN:'新闻中心',EN:'Newscenter'},
      community:{CN:'新闻中心',EN:'Newscenter'},
    }

    this.langs2 = {
      merchandise:{CN:'商品', EN:'Merchandise'},
      membership:{CN:'会员',EN:'Membership'},
      about:{CN:'关于',EN:'About'},
    }

    this.langs3 = 
      {
        CN:'加入',
        EN:'Join',
      }
  }

}


