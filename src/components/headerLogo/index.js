import React from 'react';
import styled from 'styled-components/native';
import Logo from '../../assets/Logo.png';

const Container = styled.View`
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
`;

const ImgLogo = styled.Image``;

const Header = () => {
    return (
        <Container>
            <ImgLogo source={Logo} resizeMode="contain" />
        </Container>
    )
}

export default Header;