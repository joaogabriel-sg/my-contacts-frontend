import styled from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  width: 100%;
  height: 52px;

  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-size: 16px;
  font-weight: bold;
  color: #fff;

  transition: background 0.2s ease-in;

  &[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:not(:disabled):active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;
