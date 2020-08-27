import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplefunComponent } from './samplefun.component';

describe('SamplefunComponent', () => {
  let component: SamplefunComponent;
  let fixture: ComponentFixture<SamplefunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplefunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplefunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
