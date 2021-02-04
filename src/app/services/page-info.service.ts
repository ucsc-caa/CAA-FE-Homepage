import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs";
import * as articleListInfo from './article-data.json';//
/*
 * page-info.service.ts
 *
 * This file provides page information for other files to communicate or generate pages.
 *
 * @author: Jiayin Liu
 * Revised: 11/22/2020 Create getData function
 * Revised: 11/13/2020 Create article class and 5 types of data
 *
 * @author: Yiyun Zheng
 * Revised: 11/8/2020 Create file and implement language and page type variable
 * Revised: 2/1/2021 Add attribute and function of language, nav and screen size 
 */

@Injectable({
  providedIn: 'root'
})
export class PageInfoService { 
  private langeuage = new BehaviorSubject<string>('CN');
  private openNav = new BehaviorSubject<Boolean>(false);
  private screenSize = new BehaviorSubject<String>('xs');
  constructor() {
  }

  /*
   * setLanguage
   * Update language
   * @param String
   * @return none
   */
   setLanguage(newLang: string) {
     this.langeuage.next( newLang );
   }

  /*
   * getLanguage
   * Return current language when language change
   * @param none
   * @return Observable
   */
   getLanguage(): Observable<any> {
       return this.langeuage.asObservable();
   }

  /*
   * getCurLanguage
   * Return current language
   * @param none
   * @return String
   */
   getCurLanguage(): string {
    return this.langeuage.value;
   }

  /*
   * setNav
   * Update Nav Status
   * @param Boolean
   * @return none
   */
   setNav(newStatus: Boolean) {
     this.openNav.next( newStatus );
   }

  /*
   * toggleNav
   * Change Nav Status
   * @param none
   * @return none
   */
   toggleNav() {
     this.openNav.next( !this.openNav.value );
   }

  /*
   * getNav
   * Return current nav status when status change
   * @param none
   * @return Observable
   */
   getNav(): Observable<any> {
      return this.openNav.asObservable();
   }

  /*
   * getNowNav
   * Return current nav status
   * @param none
   * @return Boolean
   */
   getNowNav(): Boolean {
    return this.openNav.value;
 }

  /*
   * setScreenSize
   * Update Screen Size
   * @param String
   * @return none
   */
   setScreenSize(newSize: string) {
    this.screenSize.next( newSize );
   }

  /*
   * getScreenSize
   * Return current screen size when size change
   * @param none
   * @return Observable
   */
   getScreenSize(): Observable<any> {
      return this.screenSize.asObservable();
   }


}

 

