import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  height: 52px;

  padding: 0 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-size: 16px;
  font-weight: bold;
  color: #fff;

  transition: background 0.2s ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

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

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:not(:disabled):hover {
      background: ${theme.colors.danger.light};
    }

    &:not(:disabled):active {
      background: ${theme.colors.danger.dark};
    }
  `}
`;
