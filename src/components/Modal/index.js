import PropTypes from 'prop-types';

import Button from '../Button';

import { Overlay, Container, Footer } from './styles';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do Modal</h1>
        <p>Corpo do Modal</p>

        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button" danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.defaultProps = {
  danger: false,
};

Modal.propTypes = {
  danger: PropTypes.bool,
};
