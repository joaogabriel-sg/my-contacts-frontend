import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: flex-start;

  span {
    word-break: break-word;
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
