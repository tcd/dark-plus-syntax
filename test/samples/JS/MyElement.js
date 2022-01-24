import {PolymerElement,} from '@polymer/polymer/polymer-element.js';

class MyComponent extends PolymerElement {
  constructor() {
    super();
  }

  static get template() {
    return `<div> I'm the Component! </div>`;
  }

  static get is() {return 'my-component';}
}

customElements.define('my-component', MyComponent);
