import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
    color: #222;
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
