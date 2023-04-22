import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Header from "../../components/headerLogo";
import GeneralContainer from "../../components/GeneralContainer";
import {
  Body,
  Button,
  ButtonIcon,
  ButtonText,
  SubTitle,
  Title,
} from "./styles";
import ButtonList from "../../components/ButtonList";
import Input from "../../components/Input";
import Check from "./components/check";
import { createOrEditClass } from "../../utils/store";
import {ToastAndroid} from 'react-native';

const propsScreen = ({ navigation, route }) => {
  const { navigate, goBack } = navigation;
  const { params } = route;

  const [unity, setUnity] = useState("");
  const [course, setCourse] = useState("");
  const [room, setRoom] = useState("");
  const [hour, setHour] = useState("");
  const [checked, setChecked] = useState("");

  const setEditData = () => {
    const { data } = params;

    setUnity(data.unity);
    setCourse(data.course);
    setRoom(data.room);
    setHour(data.hour);
    setChecked(data.notify);
  };

  useEffect(() => {
    if (params && params.data) {
      setEditData();
    }
  }, []);

  // const goToClassRoom = (id, description) => {
  //   navigate("SelectClassroom", { id: id, description: description });
  // };

  const setTimeChecked = (time) => {
    if (checked === time) {
      setChecked("");
    } else {
      setChecked(time);
    }
  };

  const verifyTimeChecked = (time) => {
    if (checked === time) {
      return true;
    }
    return false;
  };

  const saveData = async () => {
    const id =
      params && params.data
        ? params.data.idclass
        : Math.random().toString(36).slice(2, 7);
    console.log("id", id);
    const data = {
      idclass: id,
      unity,
      course,
      room,
      notify: checked,
      hour,
    };

    const response = await createOrEditClass({
      idweek: params.id,
      data,
    });

    if (response) {
      ToastAndroid.show(params && params.data ? "Aula atualizada!" : "Aula adicionada!", ToastAndroid.LONG);
      goBack();
    }
  };

  return (
    <GeneralContainer>
      <Header />
      <Body showsVerticalScrollIndicator={false}>
        <Title>{params.description}</Title>
        <Input label="Unidade" value={unity} setValue={setUnity} />
        <Input label="Curso" value={course} setValue={setCourse} />
        <Input label="Sala" value={room} setValue={setRoom} />
        <Input label="Horário" value={hour} setValue={setHour} type="numeric" />
        <SubTitle>Receber notificações faltando</SubTitle>
        <Check
          label="10 Minutos"
          value={verifyTimeChecked("10")}
          setValue={() => setTimeChecked("10")}
        />
        <Check
          label="30 Minutos"
          value={verifyTimeChecked("30")}
          setValue={() => setTimeChecked("30")}
        />
        <Check
          label="60 Minutos"
          value={verifyTimeChecked("60")}
          setValue={() => setTimeChecked("60")}
        />
        <Button onPress={() => saveData()}>
          <ButtonIcon name={params && params.data ? "check" : "plus"} />
          <ButtonText>
            {params && params.data ? "Atualizar Aula" : "Adicionar Aula"}
          </ButtonText>
        </Button>
      </Body>
    </GeneralContainer>
  );
};

export default propsScreen;
