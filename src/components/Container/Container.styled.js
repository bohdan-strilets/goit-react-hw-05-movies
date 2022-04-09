import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: ${props => (props.isPadding ? '0 0 100px 0' : '100px 0 100px 0')};
`;
