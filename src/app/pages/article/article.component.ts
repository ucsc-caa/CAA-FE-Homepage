import { Component, OnInit} from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
/*
 * article.component.ts
 *
 * @author: Jiayin Liu
 * Revised: 11/22/2020 modify import, constructor, ngOnInit()
 *
 */
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: { title: string; author: string; date: string; content: string; image: string; imageTitle: string;};

  constructor(
    private pageInfoService: PageInfoService
  ) {}

  ngOnInit(): void {
    this.article = this.pageInfoService.getData();
  }

}
