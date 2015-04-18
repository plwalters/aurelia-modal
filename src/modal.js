import {inject, bindable} from 'aurelia-framework';
import $ from 'jquery';

@inject(Element)
export class Modal {
  @bindable selectedSkin;
  constructor(element) {
    this.element = element;
    this.skins = [
      'black',
      'blue'
    ]
  }
  attached(){
    $(this.element).find('.modal').modal();
  }
}
