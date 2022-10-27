import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    background: #fff;
    width: 100%;
    height: 50px;

    padding: 0 16px;
    border: 0;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
