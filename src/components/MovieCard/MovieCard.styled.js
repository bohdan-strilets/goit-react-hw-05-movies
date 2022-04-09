import styled from '@emotion/styled';
import { accentTextColor, mainTextColor } from 'utilities/variables/css';

export const Item = styled.li`
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: calc((100% - 4 * 10px) / 2);
    margin: 10px;
  }

  @media (min-width: 1440px) {
    width: calc((100% - 6 * 10px) / 3);
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  color: ${accentTextColor};

  width: 300px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const Poster = styled.img`
  width: 300px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const VoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;

  @media (min-width: 768px) {
    width: 350px;
  }
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
