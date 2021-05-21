import { FC } from 'react';
import styled from 'styled-components';
import { ContainerProps } from './BaseMenuItem.types';

export const Container: FC<ContainerProps> = styled.button<ContainerProps>`
  flex-grow: 1;
  display: block;
  height: 52px;
  padding: 0 20px 0 18px;

  position: relative;

  font-weight: 700;
  font-size: 16px;
  line-height: 52px;
  text-align: left;
  text-transform: uppercase;
  color: #fff;

  box-sizing: border-box;
  cursor: pointer;
`;

export const TextWrapper: FC = styled.span`
  display: block;
  overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;
`;
