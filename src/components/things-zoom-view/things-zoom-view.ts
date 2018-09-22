import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ThingsZoomViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'things-zoom-view',
  templateUrl: 'things-zoom-view.html'
})
export class ThingsZoomViewComponent {
  data:any;

  constructor(
    public viewCtrl: ViewController
  ) {
    console.log('thing view zoom component', viewCtrl.data)
  }
  ngOnInit(){
    this.data = this.viewCtrl.data.data;
  }

}
