import { Injectable } from '@angular/core';
/*
 * page-info.service.ts
 *
 * This file provides page information for other files to communicate or generate pages.
 *
 * @author: Yiyun Zheng
 * Revised: 11/8/2020 Create file and implement language and page type variable
 *
 * @author: Jiayin Liu
 * Revised: 11/13/2020 Create article class and 5 types of data
 *
 */

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
  language = 'CN';
  pageType = 'article';

  article = {
    title: '论法式饼干的历史',
    author: '狗屁不通生成器',
    date: '十一月七日2020',
    content: '哈哈哈哈',
    image: ''
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
