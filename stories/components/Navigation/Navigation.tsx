import React, {
  FC,
  Fragment,
  memo,
} from 'react';
import {
  Container,
  StyledNavLink,
} from './Navigation.styled';
import { NavigationProps } from './Navigation.types';

const Navigation: FC<NavigationProps> = ({ paths = [] }) => paths.length > 0
  ? (
    <Container>
      {
        paths.map((item, index) => (
          <StyledNavLink
            key={ `navLink-${index}` }
            to={ item }
          >
            { item }
          </StyledNavLink>
        ))
      }
    </Container>
  )
  : <Fragment />

export default memo(Navigation);
