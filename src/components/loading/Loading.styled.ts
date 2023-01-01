import styled from 'styled-components';

export const LoadingStyled = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: var(--zIndex-loading);
`;
