import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyviewedproductsComponent } from './recentlyviewedproducts.component';

describe('RecentlyviewedproductsComponent', () => {
  let component: RecentlyviewedproductsComponent;
  let fixture: ComponentFixture<RecentlyviewedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyviewedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyviewedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
