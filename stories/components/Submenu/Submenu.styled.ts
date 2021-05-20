import { FC } from 'react';
import styled, { css } from 'styled-components';
import BaseMenuItem from '../BaseMenuItem';
import { SubmenuItemProps } from './Submenu.types';

export const Container: FC = styled.div`
  display: flex;
  flex-direction: column;
  background: #23252b;
`;

export const SubmenuItem: FC<SubmenuItemProps> = styled(BaseMenuItem)<SubmenuItemProps>`
  transition: 0.5s ease-in-out;

  ${
    ({ isActive }) => isActive
      ? css`
        border-left: 2px solid #2aa1d3;
      `
      : css`
        border-left: 2px solid transparent;

        &:hover,
        &:focus {
          border-left: 2px solid #8ab71b;
        }
      `
  };

  & + & {
    border-top: 1px solid #1d1f24;
  }
`;
