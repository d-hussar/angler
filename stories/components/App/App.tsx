import React, { memo } from 'react';
import Story from '../Story';
import stories from 'sourceDir/stories';

const App = () => <Story stories={ stories } />

export default memo(App);
