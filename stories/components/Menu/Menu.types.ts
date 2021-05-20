import { BaseMenuItemProps } from '../BaseMenuItem';
import {
  SetActive,
  Widget,
} from '../Story';

export type MenuProps = {
  stories: Array<Widget>,
  currentUseCaseIndex: number,
  currentWidgetIndex: number,
  setActive: SetActive,
};

export type MenuState = number | null;

export type MenuItemProps = BaseMenuItemProps & {
  isOpen: boolean;
};

export type OpenSubmenu = (index: number) => () => void
