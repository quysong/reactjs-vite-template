import styled from 'styled-components';

export const ErrorDialogStyled = styled.div`
  border-radius: 28px;
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  color: #000000;
  background-color: white;
`;

export const ErrorDialogWrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
