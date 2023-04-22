import { ButtonIcon, ButtonIconContainer, Container, Sub } from "./styles";

export const TabBar = ({ children }) => {
  return (
    <Container>
      <Sub>{children}</Sub>
    </Container>
  );
};

export const TabBarRenderIcon = ({ nameIcon, action }) => {
  return (
    <ButtonIconContainer onPress={action}>
      <ButtonIcon name={nameIcon} size={32} color="green" />
    </ButtonIconContainer>
  );
};
