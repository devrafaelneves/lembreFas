import React, { useEffect, useState } from "react";
import Header from "../../components/headerLogo";
import GeneralContainer from "../../components/GeneralContainer";
import { Body, BodyCentered, Button, ButtonIcon, ButtonText, Title } from "./styles";
import ButtonListClass from "../../components/ButtonListClass";
import { getClasses } from "../../utils/store";
import { ActivityIndicator } from "react-native";

const ClassroomScreen = ({ navigation, route }) => {
  const { navigate } = navigation;
  const { params } = route;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const getData = async () => {
    setLoading(true);

    const responsedata = await getClasses(params.id);
    setData(responsedata);

    setLoading(false);
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
      {!loading ? (
        <Body>
          <Title>{params.description}</Title>
          <ButtonListClass
            list={data}
            week={{ id: params.id, description: params.description }}
          />
          <Button onPress={() => goToInsert(params.id, params.description)}>
            <ButtonIcon name="plus" />
            <ButtonText>Adicionar Aula</ButtonText>
          </Button>
        </Body>
      ) : (
        <BodyCentered>
          <ActivityIndicator size={60} color="#ffffff" style={{ alignSelf: 'center'}}/>
        </BodyCentered>
      )}
    </GeneralContainer>
  );
};

export default ClassroomScreen;
