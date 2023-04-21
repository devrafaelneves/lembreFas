import React from "react";
import styled from "styled-components/native";

const ContainerBackground = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 0px 28px 0px 28px;
`;

const SecondContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
  position: absolute;
  width: 800px;
  height: 200%;
  left: 40px;
  top: 20px;
  transform: rotate(25deg);
  transform-origin: 54% 0;
`;

/**
 * Componente para aplicar o fundo verde em todas
 * as telas, assim como o espaçamento.
 */

const GeneralContainer = ({ children }) => {
  return (
    <ContainerBackground>
      <>
        <SecondContainer />
        {children}
      </>
    </ContainerBackground>
  );
};

export default GeneralContainer;
