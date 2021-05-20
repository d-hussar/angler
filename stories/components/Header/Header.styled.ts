import { FC } from 'react';
import styled from 'styled-components';

export const Container: FC = styled.div`
  flex: 0 0 auto;
  padding: 16px;

  border-radius: 5px;
  background-color: #444953;
`

export const WidgetTitle: FC = styled.h1`
  margin: 0 0 12px;

  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
`;

export const UseCaseTitle: FC = styled.h3`
  margin: 0 0 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

export const UseCaseDescription: FC = styled.p`
  margin: 0;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
