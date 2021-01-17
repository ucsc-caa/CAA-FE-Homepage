import { EventComponent } from './pages/event/event.component';
import { ArticleComponent } from './pages/article/article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"article",component:ArticleComponent},
  {path:"event",component:EventComponent},
  {path:"give",component:EventComponent},
  {path:"newscenter",component:ArticleComponent},
  {path:"connect",component:EventComponent},
  {path:"community",component:EventComponent},
  {path:"merchandise",component:ArticleComponent},
  {path:"membership",component:EventComponent},
  {path:"about",component:EventComponent},
  {path:"getinvolved",component:EventComponent},
  {path:"career",component:EventComponent},
  {path:"immigration",component:EventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
