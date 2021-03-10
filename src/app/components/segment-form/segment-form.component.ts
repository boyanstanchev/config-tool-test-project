import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

export interface SegmentData {
  numberOfSegments: number;
  rollerWidth: number;
  segmentWidth: number;
}

@Component({
  selector: 'app-segment-form',
  templateUrl: './segment-form.component.html',
  styleUrls: ['./segment-form.component.scss']
})
export class SegmentFormComponent implements OnInit, OnDestroy {
  @Output() formSubmitted = new EventEmitter<SegmentData>();

  private _destroy$ = new Subject<void>();

  form: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._generateForm();

    this.form
      .valueChanges
      .subscribe(() => {
        const { numberOfSegments, rollerWidth, segmentWidth } = this.form.value;

        if (numberOfSegments && rollerWidth && numberOfSegments > 0 && rollerWidth >= 50) {
          if (numberOfSegments * segmentWidth > rollerWidth) {
            this.form.controls.numberOfSegments.setErrors({ max: true });
          } else {
            this.form.controls.numberOfSegments.setErrors(null);
          }
        }
      });
  }

  generateDrawing(): void {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value as SegmentData);
    }
  }

  getControl(controlName: string): AbstractControl {
    return this.form.get(controlName);
  }

  getMaximumNumberOfSegments(): number {
    const { rollerWidth, segmentWidth } = this.form.value;

    return Math.floor(rollerWidth / segmentWidth);
  }

  private _generateForm(): FormGroup {
    return this._fb.group({
      numberOfSegments: ['', [Validators.required, Validators.min(1)]],
      rollerWidth: ['', [Validators.required, Validators.min(50)]],
      segmentWidth: [50, Validators.required]
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
