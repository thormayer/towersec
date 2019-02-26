import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerInputComponent } from './tower-input.component';

describe('TowerInputComponent', () => {
  let component: TowerInputComponent;
  let fixture: ComponentFixture<TowerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
