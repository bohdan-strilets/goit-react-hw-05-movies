import styled from '@emotion/styled';
import { accentTextColor } from 'utilities/variables/css';

export const List = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }
`;

export const Item = styled.li`
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    width: calc((100% - 10px * 8) / 4);
    margin: 10px;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 375px;
  margin-bottom: 15px;
`;

export const Photo = styled.img`
  width: 250px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${accentTextColor};
`;
