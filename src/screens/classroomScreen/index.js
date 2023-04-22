import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Header from "../../components/headerLogo";
import GeneralContainer from "../../components/GeneralContainer";
import { Body, Button, ButtonIcon, ButtonText, Title } from "./styles";
import ButtonListClass from "../../components/ButtonListClass";
import { getClasses } from "../../utils/store";

const classroomScreen = ({ navigation, route }) => {
  const { navigate } = navigation;
  const { params } = route;

  const [data, setData] = useState([]);

  const getData = async () => {
    const responsedata = await getClasses(params.id);
    console.log("responsedata", responsedata)
    setData(responsedata);
  };

  useEffect(() => {
    getData();
  }, []);

  const goToInsert = (id, description) => {
    navigate("InsertProps", { id: id, description: description });
  };

  return (
    <GeneralContainer>
      <Header />
      <Body>
        <Title>{params.description}</Title>
        <ButtonListClass list={data} week={{ id: params.id, description: params.description}}/>
        <Button onPress={() => goToInsert(params.id, params.description)}>
          <ButtonIcon name="plus" />
          <ButtonText>Adicionar Aula</ButtonText>
        </Button>
      </Body>
    </GeneralContainer>
  );
};

export default classroomScreen;
