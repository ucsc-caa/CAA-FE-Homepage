import { Component, OnInit} from '@angular/core';
import {PageInfoService} from '../../services/page-info.service';
import {SamplBackendService} from '../../services/sampl-backend.service';
/*
 * article.component.ts
 *
 * @author: Jiayin Liu
 * Revised: 11/22/2020 modify import, constructor, ngOnInit()
 *
 * @author: Yiyun Zheng
 * Revised: 11/22/2020 add http call sample code
 * 
 */
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: { title: string; author: string; date: string; content: string; image: string; imageTitle: string;};
  articles: JSON[]
  sampleId: String = '959e1741-a7c3-4ad1-9d0f-5bc0bc349939'
  newArticle= {
    'title': "Test Post",
    "content": "IDK",
    "img": "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
    "author": "Alex Zheng",
    "category": "news"
  }
  constructor(
    private pageInfoService: PageInfoService,
    private samplInfoService: SamplBackendService
  ) {}

  ngOnInit(): void {
    this.article = this.pageInfoService.getData();
    this.samplInfoService.getArticleList().subscribe(articles => {
      this.articles = articles;
      console.log('All Article');
      console.log(this.articles);
    })
    this.samplInfoService.getSelectArticleList('event').subscribe(articles => {
      this.articles = articles;
      console.log('All news');
      console.log(this.articles)
    })
    this.samplInfoService.getSelectArticle(this.sampleId).subscribe(sampleArticle => {
      console.log('Select Article');
      console.log(sampleArticle);
    })
    this.samplInfoService.postNewArticle(this.newArticle).subscribe(sampleArticle => {
      console.log('New Article');
      console.log(sampleArticle);
    })
  }

}
