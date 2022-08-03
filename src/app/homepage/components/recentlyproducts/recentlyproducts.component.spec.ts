import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyproductsComponent } from './recentlyproducts.component';

describe('RecentlyproductsComponent', () => {
  let component: RecentlyproductsComponent;
  let fixture: ComponentFixture<RecentlyproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
