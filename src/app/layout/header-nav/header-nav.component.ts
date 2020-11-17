import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  
  public give = ['捐赠','Give']
  public newscenter = ['新闻中心','Newscenter']
  public connect = ['校友联络','Connect']
  public community = ['校友社区','Community']
  public merchandise = ['商品','Merchandise']
  public membership = ['会员','Membership']
  public about = ['关于','About']
  public join = ['加入','Join']

  constructor() { }

  ngOnInit(): void {
  }
}
