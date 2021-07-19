import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 48px;

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
