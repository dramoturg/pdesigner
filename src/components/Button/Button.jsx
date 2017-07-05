export * from 'dx-components/src/components/Button/Button';
import Button, {BUTTON} from 'dx-components/src/components/Button/Button';
import {themr} from 'react-css-themr';
import * as css from './Button.styl';
export default themr(BUTTON, css)(Button);
