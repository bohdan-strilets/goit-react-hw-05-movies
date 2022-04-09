import styled from '@emotion/styled';
import { accentTextColor, mainTextColor } from 'utilities/variables/css';

export const Item = styled.li`
  width: calc((100% - 6 * 10px) / 3);
  margin: 10px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  color: ${accentTextColor};

  width: 350px;
  margin-bottom: 15px;
`;

export const Poster = styled.img`
  width: 350px;
  margin-bottom: 15px;
`;

export const VoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`;

export const VoteAverage = styled.p`
  color: ${mainTextColor};
`;

export const VoteCount = styled.p`
  color: ${mainTextColor};
`;

export const Value = styled.span`
  font-weight: 700;
`;
