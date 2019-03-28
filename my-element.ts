import { html, LitElement, customElement, css } from 'lit-element';
import katex from 'katex';
import { MySharedStyles } from './my-sharedStyles.ts';
@customElement('my-element')

export class MyElement extends LitElement {

  static get styles() {
    return [
      MySharedStyles
    ];
  }


  render() {
    return html`
    <style>{MySharedStyles}</style>
          <link rel="stylesheet" href="./style.css">
    <h1>Test 2</h1>
    <div id="formel"></div>
    <button type="button" @click="${this.handleClick}">hier</button>
    `
  }
  firstUpdated() {
    katex.render("2x^2", this.shadowRoot.getElementById("formel"))

  }
  handleClick() {
    console.log("clicked")
    katex.render("3x^5", this.shadowRoot.getElementById("formel"))
  }
}
