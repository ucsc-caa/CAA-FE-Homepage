/* 
Modified by Jiayin Liu 
1/17/2021
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

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
  }

}
