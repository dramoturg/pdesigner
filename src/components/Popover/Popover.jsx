import {themr, themeable} from 'react-css-themr';
export * from 'dx-components/src/components/Popover/Popover';
import Popover, {POPOVER} from 'dx-components/src/components/Popover/Popover';
import dxPopover from 'dx-components/src/components/Popover/Popover.styl';
import popover from './Popover.styl';

export default themr(POPOVER, themeable(dxPopover, popover))(Popover);