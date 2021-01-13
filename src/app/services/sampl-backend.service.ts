import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

/*
 * sampl-backend.service.ts
 *
 * @author: Yiyun Zheng
 * Revised: 11/27/2020 get, post sample code
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class SamplBackendService {
  hostRootUrl:string = 'http://localhost:3010/v0';

  constructor(private http:HttpClient) { }
  
  /*
   * getArticleList
   * Return All Article
   * @param None
   * @return JSON[]
   */
  getArticleList():Observable<JSON[]> {
    return this.http.get<JSON[]>(this.hostRootUrl+'/article');
  }

  /*
   * getSelectArticleList
   * Input a category, return all Article in that category
   * @param String
   * @return JSON[]
   */
  getSelectArticleList(category):Observable<JSON[]> {
    return this.http.get<JSON[]>(this.hostRootUrl+'/article?category='+category);
  }

  /*
   * getSelectArticle
   * Input an ID, return the article
   * @param String
   * @return JSON 
   */
  getSelectArticle(id:String):Observable<JSON> {
    console.log(id);
    return this.http.get<JSON>(this.hostRootUrl+'/article/'+id);
  }

  /*
   * postNewArticle
   * Create a new article return the article
   * @param None
   * @return JSON
   */
/*   postNewArticle(newArticle):Observable<JSON> {
    return this.http.post<JSON>(this.hostRootUrl+'/article', newArticle);
  } */
}
