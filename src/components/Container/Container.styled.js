import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: ${props =>
    props.isPadding ? '0 10px 100px 10px' : '100px 10px 100px 10px'};

  @media (min-width: 768px) {
    width: 748px;
  }

  @media (min-width: 1440px) {
    width: 1420px;
  }
`;
