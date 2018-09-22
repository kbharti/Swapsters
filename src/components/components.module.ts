import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsListComponent } from './things-list/things-list';
import { ThingViewComponent } from './thing-view/thing-view';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ThingsZoomViewComponent } from './things-zoom-view/things-zoom-view';
@NgModule({
	declarations: [
    ThingsListComponent,
    ThingViewComponent,
    ThingsZoomViewComponent
    ],
	imports: [
        IonicModule,
        CommonModule
    ],
	exports: [
    ThingsListComponent,
    ThingViewComponent,
    ThingsZoomViewComponent]
})
export class ComponentsModule {}
