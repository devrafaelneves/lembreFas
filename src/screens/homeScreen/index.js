import React from 'react';
import { View, Text } from 'react-native';
import { Container, Body, Button, ButtonIcon, ButtonText, Title } from './styles';
import Header from '../../components/headerLogo';

const homeScreen = () => {
    return (
        <Container>
            <Header />
            <Body>
                <Title>Bem vindo ao LEMBRE-FAS</Title>
                <Button>
                    <ButtonIcon name="clock-plus-outline" />
                    <ButtonText>Agendar Aulas</ButtonText>
                </Button>
            </Body>
        </Container>
    )
};

export default homeScreen;