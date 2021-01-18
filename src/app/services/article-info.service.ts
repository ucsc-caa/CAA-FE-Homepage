import { Injectable } from '@angular/core';
/*
 *
 * Created by Jiayin Liu on 12/27/2020
 * This file provides article information for other files to communicate or generate pages.
 *
 */

import * as articleInfo from './article-data.json';

export class ArticleInfoService{
    constructor() { }

    getArticleData(){
        return articleInfo;
    }

}
