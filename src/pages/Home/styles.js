import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
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

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;

    display: flex;
    align-items: center;

    span {
      margin-right: 8px;

      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main}
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0)')};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  background: #fff;

  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;

        font-weight: bold;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }

    span {
      display: block;

      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;

      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      display: block;
      margin-bottom: 8px;
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main}
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 8px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: flex-start;

  span {
    word-break: break-word;
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
