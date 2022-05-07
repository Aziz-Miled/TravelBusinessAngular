import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereLayoutComponent } from './usere-layout.component';

describe('UsereLayoutComponent', () => {
  let component: UsereLayoutComponent;
  let fixture: ComponentFixture<UsereLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsereLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
