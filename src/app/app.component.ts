import { Component } from '@angular/core';
import { SegmentData } from './components/segment-form/segment-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';

  segmentData: SegmentData;
}
