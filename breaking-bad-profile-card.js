import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles, } from '@cells-components/cells-lit-helpers/cells-lit-helpers.js';
import styles from './breaking-bad-profile-card-styles.js';
/**
This component ...

Example:

```html
<breaking-bad-profile-card></breaking-bad-profile-card>
```
* @customElement
* @demo demo/index.html
* @extends {LitElement}
*/
export class BreakingBadProfileCard extends LitElement {
  static get is() {
    return 'breaking-bad-profile-card';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get shadyStyles() {
    return `
      ${styles.cssText}
      ${getComponentSharedStyles('breaking-bad-profile-card-shared-styles').cssText}
    `;
  }

  // Define a template
  render() {
    return html`
      <style>${this.constructor.shadyStyles}</style>
      <slot></slot>
      <p>Welcome to ${this.name}</p>
    `;
  }
}

// Register the element with the browser
customElements.define(BreakingBadProfileCard.is, BreakingBadProfileCard);
