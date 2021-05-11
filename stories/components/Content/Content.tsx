import React, {
  FC,
  Fragment,
} from 'react';
import Header from '../Header';
import Widget from '../Widget';
import { Container }from './Content.styled';
import { ContentProps } from './Content.types';

const Content: FC<ContentProps> =({
  widget,
  useCase,
}) => widget && useCase
  ? (
    <Container>
      <Header
        widgetTitle={ widget.title }
        useCaseTitle={ useCase.title }
        useCaseDescription={ useCase.description }
      />
      <Widget
        widget={ widget }
        useCase={ useCase }
      />
    </Container>
  )
  : <Fragment />

export default Content;
