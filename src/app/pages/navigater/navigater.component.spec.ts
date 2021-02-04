import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigaterComponent } from './navigater.component';

describe('NavigaterComponent', () => {
  let component: NavigaterComponent;
  let fixture: ComponentFixture<NavigaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
