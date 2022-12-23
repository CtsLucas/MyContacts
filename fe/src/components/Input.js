import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid #fff;
  transition: border-color 0.2s ease-in;
  outline: none;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main};

    &:focus {
    border-color: ${theme.colors.danger.main};
  }
  `}

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;