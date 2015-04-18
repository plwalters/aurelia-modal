import {bindable} from 'aurelia-framework';

export class ModalBody {
  @bindable content;
  @bindable skin;
  skinMe(color){
    this.skin.color = "white";
    this.skin.backgroundColor = "black";
  }
}
