import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolSelectComponent } from './cool-select.component';

describe('CoolSelectComponent', () => {
  let component: CoolSelectComponent;
  let fixture: ComponentFixture<CoolSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
