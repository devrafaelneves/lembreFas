import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
    flex: 1;
    padding-horizontal: 25px;
`;

export const Body = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: ${({ theme }) => theme.SIZE.TITLE_MAIN}px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.BUTTON};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 230px;
    height: 200px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ButtonIcon = styled(Icon)`
    color: ${({ theme }) => theme.COLORS.ICON};
    font-size: 90px;
    margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: ${({ theme }) => theme.SIZE.INPUT}px;
`;
