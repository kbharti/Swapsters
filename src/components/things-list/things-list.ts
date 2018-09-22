import { Component } from '@angular/core';
import { thingsDataService } from '../../services/thingsData.service';
import { ThingViewComponent } from '../thing-view/thing-view';
/**
 * Generated class for the ThingsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'things-list',
  templateUrl: 'things-list.html'
})
export class ThingsListComponent  {

  public thingslist: any;

  constructor(
    public thingsService: thingsDataService
  ) {
    this.thingslist = this.thingsService.thingsDummyData;
    console.log('Hello ThingsListComponent Component', this.thingslist);
  }

}
