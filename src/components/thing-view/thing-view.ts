import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { ThingsZoomViewComponent } from '../things-zoom-view/things-zoom-view';

/**
 * Generated class for the ThingViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'thing-view',
  templateUrl: 'thing-view.html'
})
export class ThingViewComponent {
  @Input() data: any;
  popover: any;

  constructor(
    public popOver: PopoverController
  ) {
    console.log('Hello ThingViewComponent Component', this.data);
  }

  ngOnInit(){
    console.log('thing view init', this.data)
  }
  zoomImg(data, event){
    this.popover  = this.popOver.create(ThingsZoomViewComponent,{data: data})
    this.popover.present();
  }

}
