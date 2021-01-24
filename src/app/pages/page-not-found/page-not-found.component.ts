import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

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
  }

}
