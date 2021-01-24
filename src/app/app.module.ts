import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderTopComponent } from './layout/header-top/header-top.component';
import { HeaderNavComponent } from './layout/header-nav/header-nav.component';
import { ArticleComponent } from './pages/article/article.component';
import { EventComponent } from './pages/event/event.component';
import { TextComponent } from './components/text/text.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ListComponent } from './pages/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginpageComponent } from './layout/loginpage/loginpage.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { RecentArticleComponent } from './pages/recent-article/recent-article.component';
import { StaffComponent } from './pages/staff/staff.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    ArticleComponent,
    EventComponent,
    TextComponent,
    PageNotFoundComponent,
    ListComponent,
    LoginpageComponent,
    ArticleListComponent,
    RecentArticleComponent,
    StaffComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
