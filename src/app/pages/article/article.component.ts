import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id: String;
  article: JSON;

  constructor(
    private pageInfoService: PageInfoService,
    private samplInfoService: SamplBackendService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.article = this.pageInfoService.getData();
    this.samplInfoService.getSelectArticle(this.id).subscribe(article => {
      this.article = article;
    })
  }

}
