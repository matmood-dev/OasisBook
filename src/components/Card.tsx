import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 16px;
`;

export const Primary = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff; border: none; cursor: pointer;
  padding: 10px 14px; border-radius: 12px; font-weight: 600;
  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }
`;
