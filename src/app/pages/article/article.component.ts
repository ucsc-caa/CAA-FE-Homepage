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


  // public picUrl = 'https://image.shutterstock.com/image-photo/red-apple-on-white-background-600w-158989157.jpg';
  article: { title: string; author: string; date: string; content: string; image: string; };

  constructor(
    private pageInfoService: PageInfoService
  ) {}

  ngOnInit(): void {
    this.article = this.pageInfoService.getData();
  }

}
