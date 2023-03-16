import styled from 'styled-components';

export const ReactPlayerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;

export const ModalStyle = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  @media (min-width: 1144px) {
    max-width: calc(100vw - 28px);
    max-height: calc(100vh - 14px);
  }
`;
