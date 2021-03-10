import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SegmentFormComponent } from './components/segment-form/segment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SegmentPreviewComponent } from './components/segment-preview/segment-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SegmentFormComponent,
    SegmentPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
