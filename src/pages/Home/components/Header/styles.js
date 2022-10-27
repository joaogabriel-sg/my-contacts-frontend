import styled from 'styled-components';

export const Container = styled.header`
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};

  strong {
    font-size: 24px;
  }

  a {
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};

    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;
