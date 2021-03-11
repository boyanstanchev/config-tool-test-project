import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { SegmentData } from '../segment-form/segment-form.component';

@Component({
  selector: 'app-segment-preview',
  templateUrl: './segment-preview.component.html',
  styleUrls: ['./segment-preview.component.scss']
})
export class SegmentPreviewComponent implements OnChanges {
  @Input() segmentData: SegmentData;

  segments = [];
  positions = [];

  percentageFilled: number;
  singleSegmentWidthPercentage: string;

  ngOnChanges(): void {
    if (this.segmentData) {
      this.segments.length = this.segmentData.numberOfSegments;
      this.positions.length = this._calculatePositions();

      this.segments.fill({});
      this.positions.fill({});

      this._calculateWidths();
    }
  }

  getSegmentOffset(index: number): string {
    return ((index * 50) / this.segmentData.rollerWidth) * 100 + '%';
  }

  private _calculateWidths(): void {
    const { segmentWidth, rollerWidth, numberOfSegments } = this.segmentData;

    // Calculate what % is one segment width of the total roller width in mm
    this.singleSegmentWidthPercentage = ((segmentWidth * 100) / rollerWidth).toFixed(2);

    // Calculate what percentage of roller width is filled with segments
    this.percentageFilled = +(((numberOfSegments * segmentWidth) / rollerWidth) * 100).toFixed(2);
  }

  // Calculates how many positional markers we'll need
  private _calculatePositions(): number {
    return Math.floor(this.segmentData.rollerWidth / 50) + 1;
  }
}
