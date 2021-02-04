/*
 * app.component.ts
 *
 * TS file for layout
 *
 * @author: Yiyun Zheng
 * Revised: 2/1/2020 Add variable and function to update and track screen size. fix navigator bug
 */
import { Component, OnChanges, OnInit,ViewChild} from '@angular/core';
import {PageInfoService} from './services/page-info.service';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  openNav: Boolean = false;
  subscription: Subscription;
  pageSize: String;
  constructor(
    private pageInfoService: PageInfoService,
    private breakpointObserver: BreakpointObserver,
    ){
    this.subscription = this.pageInfoService.getNav().subscribe(navStatus => {
      this.openNav = navStatus;
    });

    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe(results=>{
        if (results.matches) {
          this.pageInfoService.setScreenSize('xs');
        }
      });
    
    this.breakpointObserver
      .observe([Breakpoints.Small])
      .subscribe(results=>{
        if (results.matches) {
          this.pageInfoService.setScreenSize('sm');
        }
      });
      
    this.breakpointObserver
      .observe([Breakpoints.Medium])
      .subscribe(results=>{
        if (results.matches) {
          this.pageInfoService.setScreenSize('md');
        }
      });
    
    this.breakpointObserver
      .observe([Breakpoints.XLarge, Breakpoints.Large])
      .subscribe(results=>{
        if (results.matches) {
          this.pageInfoService.setScreenSize('lg');
        }
      });
    
    this.subscription = this.pageInfoService.getScreenSize().subscribe(size => {
        this.pageSize = size;
        if (this.pageSize!='lg'){
          this.openNav = false;
        }
      });
  }
  ngOnInit(): void {
  }
}
