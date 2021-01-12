import { TestBed } from '@angular/core/testing';
/*
 *
 * Created by Jiayin Liu on 12/27/2020
 *
 */
import { ArticleInfoService } from './article-info.service';

describe('ArticleInfoService', () => {
  let service: ArticleInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});