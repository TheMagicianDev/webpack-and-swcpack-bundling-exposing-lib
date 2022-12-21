/* eslint-disable no-var */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as HeroJsModul from './index';

var HeroJs = HeroJsModul;

if (this) {
  this.HeroJs = HeroJsModul;
}

if (globalThis) {
  globalThis.HeroJs = HeroJsModul;
}

window.HeroJs = HeroJs;
