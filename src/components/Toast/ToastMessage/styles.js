import styled, { css, keyframes } from 'styled-components';

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const messageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(100px);
  }
`;

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
};

export const Container = styled.div`
  padding: 16px 32px;
  border-radius: 4px;
  color: #ffffff;
  box-shadow: 0 20px 20px -16px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${messageIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${messageOut} 0.2s;
  `}

  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
