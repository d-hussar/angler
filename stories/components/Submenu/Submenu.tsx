import React, {
  FC,
  Fragment,
} from 'react';
import {
  Container,
  SubmenuItem,
} from './Submenu.styled';
import { SubmenuProps } from './Submenu.types';

const Submenu: FC<SubmenuProps> = ({
  currentUseCase,
  isActive = false,
  setActive,
  items = [],
}) => items.length > 0
  ? (
    <Container>
      {
        items.map(({ title }, index) => (
          <SubmenuItem
            isActive={ isActive && index === currentUseCase }
            onClick={ () => { setActive(index) } }
            key={ title }
          >
            { title }
          </SubmenuItem>
        ))
      }
    </Container>
  )
  : <Fragment />

export default Submenu;
