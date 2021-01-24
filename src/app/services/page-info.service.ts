import { Injectable } from '@angular/core';
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
  language = 'CN';
  pageType = 'articleList';
  
  article = {
    title: '论法式饼干的历史',
    author: '狗屁不通生成器',
    date: '十一月七日2020',
    content: '生活中，若论法式饼干的历史出现了，我们就不得不考虑它出现了的事实。 我认为， 每个人都不得不面对这些问题。 在面对这种问题时， 马尔顿曾经提到过，坚强的信心，能使平凡的人做出惊人的事业。这不禁令我深思。 歌德曾经提到过，意志坚强的人能把世界放在手中像泥块一样任意揉捏。这句话语虽然很短，但令我浮想联翩。 爱迪生曾经说过，失败也是我需要的，它和成功对我一样有价值。这启发了我， 论法式饼干的历史因何而发生？ 可是，即使是这样，论法式饼干的历史的出现仍然代表了一定的意义。 伏尔泰说过一句富有哲理的话，坚持意志伟大的事业需要始终不渝的精神。带着这句话，我们还要更加慎重的审视这个问题： 从这个角度来看， 对我个人而言，论法式饼干的历史不仅仅是一个重大的事件，还可能会改变我的人生。 从这个角度来看， 论法式饼干的历史，发生了会如何，不发生又会如何。',
    image: 'https://image.shutterstock.com/image-photo/red-apple-on-white-background-600w-158989157.jpg',
    imageTitle: '这不是一张法式饼干的照片'
  } 

  event = {
    image:'/assets/image/cover_art.png',
    date:'CAA October.19 Event',
    contact: 'Join us @ McHenry Library',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Lorem mollis aliquam ut porttitor leo a. Suspendisse potenti nullam ac tortor vitae purus'
  }

  
  articleList = 
    {
    title: 'test1',
    author: 'Jiayin',
    date: '1/1/2021',
    content: 'hhhhhhhhhhhhhhhhhhhhhh',
    image: 'https://image.shutterstock.com/image-photo/red-apple-on-white-background-600w-158989157.jpg',
    imageTitle: 'appleOne'
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

  /*
   * getData
   * This method return data we created
   * @param None
   * @return data in article
   */
  getData(){
    return this.article;
  }

  /*
   * getData2
   * This method return data is created for event
   * @param None
   * @return data in event
   */
  getData2(){
    return this.event;
  }
  
  //return data of article list
  getArticleList(){
    return this.articleList;
  }

}

 

