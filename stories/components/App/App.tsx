import React, {
  FC,
  Fragment,
  memo,
} from 'react';
import Story from '../Story';
import { GlobalStyle } from './App.styled';
import stories from 'sourceDir/stories';

const App: FC = () => (
  <Fragment>
    <GlobalStyle />
    <Story stories={ stories } />
  </Fragment>
);

export default memo(App);
