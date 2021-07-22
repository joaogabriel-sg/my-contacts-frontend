import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.defaultProps = {
  error: null,
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};
