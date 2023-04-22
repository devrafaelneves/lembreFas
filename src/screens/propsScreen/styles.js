import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const Body = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.SIZE.TITLE_SUB};
  text-align: center;
  margin-bottom: 40px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 60px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ButtonIcon = styled(Icon)`
  color: ${({ theme }) => theme.COLORS.ICON};
  font-size: 30px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.SIZE.INPUT};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 20px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
