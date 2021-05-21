import React, { FC } from 'react';
import {
  Container,
  TextWrapper,
} from './BaseMenuItem.styled';
import { BaseMenuItemProps } from './BaseMenuItem.types';

const SubmenuItem: FC<BaseMenuItemProps> = ({
  isActive = false,
  className = '',
  onClick = () => { /* do nothing */ },
  children,
}) => {
  return (
    <Container
      isActive={ isActive }
      className={ className }
      onClick={ onClick }
    >
      <TextWrapper>
        { children }
      </TextWrapper>
    </Container>
  )
};

export default SubmenuItem;
