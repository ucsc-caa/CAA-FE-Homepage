import { Component, OnInit} from '@angular/core';
import {PageInfoService} from './services/page-info.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homepage';
  pageType = 'event';
  constructor(
    private pageInfoService: PageInfoService,
  ){}
  ngOnInit(): void {
    this.pageType = this.pageInfoService.getPageType();
  }
}
