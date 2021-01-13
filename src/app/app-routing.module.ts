import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleComponent } from './pages/article/article.component';
import { EventComponent } from './pages/event/event.component';
import { ListComponent } from './pages/list/list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RecentArticleComponent } from './pages/recent-article/recent-article.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: MainComponent},
  {path:'article', 
   component: ArticleListComponent,
   children: [
     {path:'', redirectTo:'recent', pathMatch:'full'},
     {path:'recent', component: RecentArticleComponent},
     {path:'list', component:ListComponent},

   ]
  },
  {path:'event', 
   component:ArticleListComponent,
   children: [
    {path:'', redirectTo:'recent', pathMatch:'full'},
    {path:'recent', component: RecentArticleComponent},
    {path:'list', component:ListComponent},
  ]
  },
  {path:'content/:id', component:ArticleComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }