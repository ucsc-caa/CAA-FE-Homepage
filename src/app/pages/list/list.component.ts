/*
 * list.component.ts
 *
 * @author: Jiayin Liu
 * Created: 1/6/2020 create the list component
 * 
 * @author: Yiyun Zheng
 * Revised: 1/14/2020 add article data type
 *
 * @author: Jiayin Liu
 * Revised: 2/18/2021
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from 'src/app/models/article';
import {ArticleInfoService} from '../../services/article-info.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  articles: article[];
  theCategory: String;
  thePage: number;

  article1= {
    "author": "Jiayin",
    "category": "event",
    "content": "hihihi",
    "id": 0,
    "page": 66
  }

  article2= {
    "author": "Lisa",
    "category": "article",
    "content": "hello",
    "id": 1,
    "page": 77
  }

  constructor(
    private articleService: ArticleInfoService, 
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    
    // post two articles
    this.articleService.postNewArticle(this.article1).subscribe(articles => {
      console.log('new article');
    })

    this.articleService.postNewArticle(this.article2).subscribe(articles => {
      console.log('new article');
    })

    // get catogaory and page we need from url
    let theCategory = this.route.snapshot.params.category;
    let thePage = this.route.snapshot.params.page;

    // return articles by category and page
    this.articleService.getSelectArticleList(this.theCategory, this.thePage).subscribe(articles => {
      this.articles = articles;
      console.log(this.articles)
    })
  }
}