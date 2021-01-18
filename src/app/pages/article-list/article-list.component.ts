/* 
Modified by Jiayin Liu 
1/17/2021

Modified by Jiayin
1/19/2021
import text
*/
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { text } from '../../models/text';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() language:string;
  langs:{};

  constructor(
    private _router: Router
  ) { }

  gotoList(): void{
    this._router.navigate(['/event/list']);
  }

  gotoRecent(): void{
    this._router.navigate(['/event/recent']);
  }

  ngOnInit(): void {

    this.langs = {
      a:{CN:'最新文章', EN:'Latest Article'},
      b:{CN:'全部文章',EN:'All Articles'},
    }
  }

}
