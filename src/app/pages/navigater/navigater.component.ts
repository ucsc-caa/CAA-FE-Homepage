/*
 * navigater.component.ts
 *
 * Navgator for small screen
 *
 * @author: Yiyun Zheng
 * Revised: 2/1/2020 Create file
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageInfoService } from 'src/app/services/page-info.service';


@Component({
  selector: 'app-navigater',
  templateUrl: './navigater.component.html',
  styleUrls: ['./navigater.component.css']
})
export class NavigaterComponent implements OnInit {
  navList:{};
  constructor(
    public router: Router,
    private pageInfoService: PageInfoService,
  ) { }

  ngOnInit(): void {
    this.navList = {
      getinvolved:{CN:'志愿机会', EN:'Get Involved'},
      career:{CN:'工作机会',EN:'Career'},
      immigration:{CN:'移民咨询',EN:'Immigration'},
      give:{CN:'捐赠', EN:'Give'},
      newscenter:{CN:'新闻中心',EN:'Newscenter'},
      connect:{CN:'校友联络',EN:'Connect'},
      community:{CN:'校友社区',EN:'Community'},
      merchandise:{CN:'商品', EN:'Merchandise'},
      membership:{CN:'会员',EN:'Membership'},
      about:{CN:'关于',EN:'About'},
      join:{CN:'加入',EN:'Join'},
      user:{CN:'用户',EN:'User'},
      myinfo:{CN:'我的信息',EN:'My infomation'},
      logout:{CN:'登出',EN:'Log out'},
    }
  }

  navigation(path: string): void{
    this.router.navigate([path]);
    this.pageInfoService.setNav(false);
  }

}
