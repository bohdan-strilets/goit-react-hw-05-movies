import styled from '@emotion/styled';
import { accentBgColor, accentTextColor } from 'utilities/variables/css';

export const List = styled.ul``;

export const Item = styled.li`
  border: 1px solid ${accentBgColor};
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  color: ${accentTextColor};
  margin-bottom: 15px;
`;

export const Text = styled.p`
  line-height: 2;
`;
