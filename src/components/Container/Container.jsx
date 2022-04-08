import propTypes from 'prop-types';
import { ContainerWrapper } from './Container.styled';

function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

Container.prototype = {
  children: propTypes.element,
};

export default Container;
