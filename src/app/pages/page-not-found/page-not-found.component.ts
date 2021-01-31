import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { text } from '../../models/text';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  langs:{};

  constructor(private _router: Router) { }

  gotoHome(): void{
    this._router.navigate(['/home']);
  }

  gotoTeam(): void{
    this._router.navigate(['/team']);
  }

  gotoStaff(): void{
    this._router.navigate(['/staff']);
  }

  ngOnInit(): void {
    this.langs = {
      a:{CN:'404 很抱歉，您查找的页面不存在', EN:'404 Sorry, the page does not exist'},
      b:{CN:'返回首页>', EN:'Go to Home>'}, 
    }
  }

}
