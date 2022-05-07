import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelProgramComponent } from './travelprograms.component';

describe('TablesComponent', () => {
  let component: TravelProgramComponent;
  let fixture: ComponentFixture<TravelProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
