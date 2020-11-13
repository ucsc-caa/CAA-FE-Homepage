import { Injectable } from '@angular/core';
/*
 * page-info.service.ts
 *
 * This file provides page information for other files to communicate or generate pages.
 *
 * @author: Holly Hao
 * Revised: 11/12/2020 Create event class and three types of data
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

  event = {
    image:'imgLink';
    date:'CAA October.19 Event';
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore ...';
  }

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
