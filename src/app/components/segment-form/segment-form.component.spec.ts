import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SegmentFormComponent } from './segment-form.component';

describe('SegmentFormComponent', () => {
  let component: SegmentFormComponent;
  let fixture: ComponentFixture<SegmentFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
