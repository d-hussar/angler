import React, {
  FC,
  Fragment,
  memo,
} from 'react';
import {
  Container,
  UseCaseDescription,
  UseCaseTitle,
  WidgetTitle,
} from './Header.styled';
import { HeaderProps } from './Header.types';

const Header: FC<HeaderProps> = ({
  widgetTitle,
  useCaseTitle,
  useCaseDescription,
}) => (
  <Container>
    <WidgetTitle>{ widgetTitle }</WidgetTitle>
    <UseCaseTitle>{ useCaseTitle }</UseCaseTitle>
    {
      useCaseDescription
        ? <UseCaseDescription>{ useCaseDescription }</UseCaseDescription>
        : <Fragment />
    }
  </Container>
);

export default memo(Header);
