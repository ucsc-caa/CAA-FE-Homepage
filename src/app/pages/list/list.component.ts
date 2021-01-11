/*
 * list.component.ts
 *
 * @author: Jiayin Liu
 * Created: 1/6/2020 create the list component
 *
 */
import { Component, OnInit } from '@angular/core';
import {SamplBackendService} from '../../services/sampl-backend.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  articles: JSON[]

  // return article's id when clicked
  public returnId(article: any){
    console.log(article.id);
  }

  constructor(private samplInfoService: SamplBackendService) { }

  ngOnInit(): void {
    // return all articles
    this.samplInfoService.getArticleList().subscribe(articles => {
      this.articles = articles;
      console.log('All Article');
      console.log(this.articles);
    })
    // return all events
    this.samplInfoService.getSelectArticleList('event').subscribe(articles => {
      this.articles = articles;
      console.log('All event');
      console.log(this.articles)
    })
    // return all news
    this.samplInfoService.getSelectArticleList('news').subscribe(articles => {
      this.articles = articles;
      console.log('All news');
      console.log(this.articles)
    })
  }

}
