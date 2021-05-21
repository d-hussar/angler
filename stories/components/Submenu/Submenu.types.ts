import { UseCase } from '../Story';
import { BaseMenuItemProps } from '../BaseMenuItem';

export type SubmenuProps = {
  currentUseCase: number;
  setActive: (useCaseIndex: number) => void,
  isActive?: boolean;
  items?: Array<UseCase>;
}

export type SubmenuItemProps = BaseMenuItemProps;
