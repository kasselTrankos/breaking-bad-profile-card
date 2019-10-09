import { LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { getComponentSharedStyles, } from '@cells-components/cells-lit-helpers/cells-lit-helpers.js';
import { CellsI18nMixin as cellsI18nMixin } from '@cells-components/cells-i18n-mixin';
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
export class BreakingBadProfileCard extends cellsI18nMixin(LitElement) {
  static get is() {
    return 'breaking-bad-profile-card';
  }

  // Declare properties
  static get properties() {
    return {
      image: {
        type: String
      },

      name: {
        type: String
      },

      id: {
        type: Number
      },

      nickname: {
        type: String
      },

      birthday: {
        type: String
      },

      status: {
        type: String
      },

      occupation: {
        type: Array
      },

      playedBy: {
        type: String
      },

      seasons: {
        type: Array
      }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.occupation = [];
    this.seasons = [];
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
      <style>
        ${this.constructor.shadyStyles}
      </style>
      <div class="container">
        <div class="header">
          ${this._renderHeaderImg()}
          ${this._renderHeaderTitle()}
        </div>
        <div class="info">
          ${this._renderInfoStringData('breaking-bad-profile-card-nickname', this.nickname)}
          ${this._renderInfoStringData('breaking-bad-profile-card-birthday', this.birthday)}
          ${this._renderInfoStringData('breaking-bad-profile-card-status', this.status)}
          ${this._renderInfoArrayData('breaking-bad-profile-card-occupation', this.occupation)}
          ${this._renderInfoStringData('breaking-bad-profile-card-played-by', this.playedBy)}
          ${this._renderInfoArrayData('breaking-bad-profile-card-seasons-appearance', this.seasons)}
        </div>
      </div>
    `;
  }

  _renderHeaderImg() {
    return html`
      <div class="image">
        <img src="${ifDefined(this.image)}">
      </div>
    `;
  }

  _renderHeaderTitle() {
    return html`
      <div class="title">
        <h2>${this.name}</h2>
        <p>${this.t('breaking-bad-profile-card-id')}: ${this.id}</p>
      </div>
    `;
  }

  _renderInfoStringData(label, value) {
    return html`
      <div class="data info-${label.toLowerCase()}">
        <span>${this.t(label)}</span>
        <p>${ifDefined(value)}</p>
      </div>
    `;
  }

  _renderInfoArrayData(label, arrayValue) {

    const arrayString = arrayValue ? arrayValue.reduce((result, item) => `${result}, ${item}`) : '';
    return this._renderInfoStringData(label, arrayString);
  }
}

// Register the element with the browser
customElements.define(BreakingBadProfileCard.is, BreakingBadProfileCard);
