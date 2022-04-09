import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import {
  mainGradient,
  mainHoverEfect,
  mainTextColor,
  secondTextColor,
} from 'utilities/variables/css';

export const HeaderWrapper = styled.header`
  background-image: ${mainGradient};
  padding: 50px 0 50px 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const CustomIcon = styled(FaFilm)`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  color: ${secondTextColor};
`;

export const Title = styled.h1`
  font-size: 25px;
  color: ${secondTextColor};

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 1440px) {
    font-size: 50px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

export const CustomLink = styled(NavLink)`
  font-size: 15px;
  font-weight: 700;
  color: ${mainTextColor};
  transition: color ${mainHoverEfect};

  &.active {
    text-decoration: underline;
  }

  :hover {
    color: ${secondTextColor};
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
