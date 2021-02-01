import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs";
import * as articleListInfo from './article-data.json';//
/*
 * page-info.service.ts
 *
 * This file provides page information for other files to communicate or generate pages.
 *
 * @author: Holly Hao
 * Revised: 11/23/2020 Update content and image component and add contact component. Meanwhile, create getData 2 function
 * Revised: 11/22/2020 Update event 
 * Revised: 11/12/2020 Create event class and three types of data
 *
 * @author: Jiayin Liu
 * Revised: 11/22/2020 Create getData function
 * Revised: 11/13/2020 Create article class and 5 types of data
 *
 * @author: Yiyun Zheng
 * Revised: 11/8/2020 Create file and implement language and page type variable
 *
 */

@Injectable({
  providedIn: 'root'
})
export class PageInfoService { 
  private langeuage = new Subject<String>();
  private openNav = new BehaviorSubject<Boolean>(false);
  constructor() {
  }

   setLanguage(newLang: string) {
     this.langeuage.next( newLang );
   }

   getLanguage(): Observable<any> {
       return this.langeuage.asObservable();
   }

   setNav(newStatus: Boolean) {
     this.openNav.next( newStatus );
   }

   toggleNav() {
     this.openNav.next( !this.openNav.value );
   }

   getNav(): Observable<any> {
      return this.openNav.asObservable();
   }


}

 

