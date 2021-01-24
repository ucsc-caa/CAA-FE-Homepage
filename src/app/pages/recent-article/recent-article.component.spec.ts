import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentArticleComponent } from './recent-article.component';

describe('RecentArticleComponent', () => {
  let component: RecentArticleComponent;
  let fixture: ComponentFixture<RecentArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
