/* <!-- 
    Modified by Jiayin Liu
    1/15/2021
 --> */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from 'src/app/models/article';
import {SamplBackendService} from '../../services/sampl-backend.service';

@Component({
  selector: 'app-recent-article',
  templateUrl: './recent-article.component.html',
  styleUrls: ['./recent-article.component.css']
})
export class RecentArticleComponent implements OnInit {

  articles: article[];

  constructor(
    private samplInfoService: SamplBackendService, 
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.samplInfoService.getArticleList().subscribe(articles => {
      this.articles = articles;
    })
  
  }

}