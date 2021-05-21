import React, {
  FC,
  memo,
  useState,
} from 'react';
import Content from '../Content';
import Menu from '../Menu';
import { Container } from './Story.styled';
import {
  SetActive,
  StoryProps,
} from './Story.types';

const Story: FC<StoryProps> = memo(({ stories }) => {
  const [currentWidgetIndex, setCurrentWidget] = useState(0);
  const [currentUseCaseIndex, setCurrentUseCase] = useState(0);

  const currentWidget = stories[currentWidgetIndex];
  const currentUseCase = currentWidget?.useCase && currentWidget.useCase[currentUseCaseIndex];

  const setActive: SetActive = widgetIndex => useCaseIndex => {
    setCurrentWidget(widgetIndex);
    setCurrentUseCase(useCaseIndex);
  };

  return (
    <Container>
      <Menu
        stories={ stories }
        currentUseCaseIndex={ currentUseCaseIndex }
        currentWidgetIndex={ currentWidgetIndex }
        setActive={ setActive }
      />
      <Content
        widget={ currentWidget }
        useCase={ currentUseCase }
      />
    </Container>
  );
});

export default Story;
