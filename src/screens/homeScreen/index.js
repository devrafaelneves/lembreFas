import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Body,
  Button,
  ButtonIcon,
  ButtonText,
  Title,
} from "./styles";
import Header from "../../components/headerLogo";
import GeneralContainer from "../../components/GeneralContainer";

const homeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const goToSchedule = () => {
    navigate("SelectDate");
  };

  return (
    <GeneralContainer>
      <Header />
      <Body>
        <Title>Bem vindo ao LEMBRE-FAS</Title>
        <Button onPress={() => goToSchedule()}>
          <ButtonIcon name="clock-plus-outline" />
          <ButtonText>Agendar Aulas</ButtonText>
        </Button>
      </Body>
    </GeneralContainer>
  );
};

export default homeScreen;
