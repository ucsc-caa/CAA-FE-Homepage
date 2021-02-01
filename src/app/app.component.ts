import { Component, OnChanges, OnInit,ViewChild} from '@angular/core';
import {PageInfoService} from './services/page-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  openNav: Boolean = false;
  subscription: Subscription;
  constructor(private pageInfoService: PageInfoService){
    this.subscription = this.pageInfoService.getNav().subscribe(navStatus => {
      this.openNav = navStatus;
    });
  }
  ngOnInit(): void {
  }
}
