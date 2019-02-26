import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerButtonComponent } from './tower-button.component';

describe('TowerButtonComponent', () => {
  let component: TowerButtonComponent;
  let fixture: ComponentFixture<TowerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
