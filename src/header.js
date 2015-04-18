import {bindable} from 'aurelia-framework';

export class Header {
  @bindable title = '';
  @bindable skin;
  @bindable availableSkins = [
    { backgroundColor: 'black', color: 'white' },
    { backgroundColor: 'blue', color: 'red' }
  ];
}
