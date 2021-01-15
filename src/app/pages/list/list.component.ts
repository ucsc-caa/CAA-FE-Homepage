/*
 * list.component.ts
 *
 * @author: Jiayin Liu
 * Created: 1/6/2020 create the list component
 * 
 * @author: Yiyun Zheng
 * Revised: 1/14/2020 add article data type
 *
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from 'src/app/models/article';
import {SamplBackendService} from '../../services/sampl-backend.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  articles: article[];
  pageType: String;

  constructor(
    private samplInfoService: SamplBackendService, 
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    // Get which type of article we need from url.
    this.pageType = this.route.snapshot.parent.url[0].path;
    // return all events
    this.samplInfoService.getSelectArticleList(this.pageType).subscribe(articles => {
      this.articles = articles;
      console.log('All'+this.pageType);
      console.log(this.articles)
    })
  }

  // return article's id when clicked
  printId(articleId:string) {
    this.router.navigate(['/content', articleId]);
  }

}
