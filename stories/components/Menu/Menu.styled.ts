import { FC } from 'react';
import styled, { css } from 'styled-components';
import BaseMenuItem from '../BaseMenuItem';
import { MenuItemProps } from './Menu.types';

export const Container: FC = styled.div`
  flex: 0 0 auto;
  height: max-content;
  width: 292px;
  border-radius: 5px;
  background-color: #444953;

  margin-left: 20px;
  overflow: hidden;
`;

export const MenuItemWrapper: FC = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem: FC<MenuItemProps> = styled(BaseMenuItem)<MenuItemProps>`
  ${({ isOpen, isActive }) => isOpen && css`
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      bottom: -8px;
      left: calc(50% - 20px);

      transform: rotateZ(45deg);

      background-color: #444953;
      border-radius: 2px;
    }

    ${isActive && 'border-bottom: 2px solid #8ab71b'};
  `};

  & + & {
    border-top: 1px solid #333841;
  }
`;
