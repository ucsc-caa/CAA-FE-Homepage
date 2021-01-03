import { Component, OnInit } from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';

@Component({
  selector: 'app-articleList',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.css']
})
export class ArticleListComponent implements OnInit {
  articleList: { title: string; author: string; date: string; content: string; image: string; imageTitle: string; };


  constructor(
    private pageInfoService: PageInfoService
  ) { }

  ngOnInit(): void {
    this.articleList = this.pageInfoService.getArticleList();
  }

}
