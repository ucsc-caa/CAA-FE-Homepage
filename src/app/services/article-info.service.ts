import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { article } from '../models/article';

/*
 *
 * Created by Jiayin Liu on 12/27/2020
 * This file provides article information for other files to communicate or generate pages.
 *
 * Modified by Jiayin Liu on 2/18/2021
 * 
 */

@Injectable({
    providedIn: 'root'
  })

export class ArticleInfoService{
    hostRootUrl: string = 'http://127.0.0.1:8080';

    constructor(private http:HttpClient) { }

    // get articles by catogory and page
    getSelectArticleList(category,page):Observable<article[]> {
        return this.http.get<article[]>(this.hostRootUrl+'/articles?category='+category+'&page='+page);
      }

    // postNewArticle
    postNewArticle(newArticle):Observable<JSON> {
       return this.http.post<JSON>(this.hostRootUrl+'/articles/', newArticle);
    } 

    // update existed Article by ID
    updateArticle(newID): Observable<JSON> {
      return this.http.put<JSON>(this.hostRootUrl+'/articles/', newID);
    }

    // get article by ID
    getSelectArticle(id: number):Observable<article> {
      console.log(id);
      return this.http.get<article>(this.hostRootUrl+'/articles/'+id);
    }

    // delete article by ID
    deleteArticle(id: number): Observable<JSON> {
      return this.http.delete<JSON>(this.hostRootUrl+'/articles/'+id);
    }

}
