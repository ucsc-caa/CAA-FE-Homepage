import { Component, OnInit} from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
/*
 * article.component.ts
 *
 * @author: Jiayin Liu
 * Revised: 11/21/2020 modify import, constructor, ngOnInit()
 *
 */
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  pageType = 'article';
  constructor(
     private pageInfoService: PageInfoService
  ) {}

  ngOnInit(): void {
    this.pageType = this.pageInfoService.getPageType();
  }

}
