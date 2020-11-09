import { Injectable } from '@angular/core';
/*
 * page-info.service.ts
 *
 * This file provides page information for other files to communicate or generate pages.
 *
 * @author: Yiyun Zheng
 * Revised: 11/8/2020 Create file and implement language and page type variable
 *
 */

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  language = 'CN';
  pageType = 'article';
  constructor() { }

  /*
  * getPageType
  * This method return the page type
  * @param None
  * @return String
  */
  getPageType(){
    return this.pageType;
  }
}
