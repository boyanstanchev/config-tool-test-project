import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SegmentPreviewComponent } from './segment-preview.component';

describe('SegmentPreviewComponent', () => {
  let component: SegmentPreviewComponent;
  let fixture: ComponentFixture<SegmentPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
