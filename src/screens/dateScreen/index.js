import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/headerLogo";
import GeneralContainer from "../../components/GeneralContainer";
import { Body, Title } from "./styles";
import ButtonList from "../../components/ButtonList";

const dateScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const goToClassRoom = (id, description) => {
    navigate("SelectClassroom", { id: id, description: description });
  };

  const DiasSemana = [
    {
      id: 2,
      description: "Segunda",
      action: () => goToClassRoom(2, "Segunda"),
    },
    {
      id: 3,
      description: "Terça",
      action: () => goToClassRoom(3, "Terça"),
    },
    {
      id: 4,
      description: "Quarta",
      action: () => goToClassRoom(4, "Quarta"),
    },
    {
      id: 5,
      description: "Quinta",
      action: () => goToClassRoom(5, "Quinta"),
    },
    {
      id: 6,
      description: "Sexta",
      action: () => goToClassRoom(6, "Sexta"),
    },
  ];

  return (
    <GeneralContainer>
      <Header />
      <Body>
        <Title>Selecione o dia</Title>
        <ButtonList list={DiasSemana} />
      </Body>
    </GeneralContainer>
  );
};

export default dateScreen;
