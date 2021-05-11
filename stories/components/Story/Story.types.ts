import { ComponentType } from 'react';

export type UseCase = {
  title: string;
  description?: string;
  paths?: Array<string>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  props?: any;
};

export type Widget = {
  title: string;
  Component: ComponentType;
  useCase?: Array<UseCase>;
  Decorator?: ComponentType;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  decoratorProps?: any;
};

export type StoryProps = {
  stories: Array<Widget>;
};
