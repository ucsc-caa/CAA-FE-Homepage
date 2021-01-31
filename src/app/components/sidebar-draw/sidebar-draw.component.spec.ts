import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDrawComponent } from './sidebar-draw.component';

describe('SidebarDrawComponent', () => {
  let component: SidebarDrawComponent;
  let fixture: ComponentFixture<SidebarDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
