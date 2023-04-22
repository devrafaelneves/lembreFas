import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Sub = styled.View`
  height: 50px;
  width:  100%;
  flex-direction: row;
  justify-content: center;
  padding: 5px;
`;

export const ButtonIconContainer = styled.TouchableOpacity``;

export const ButtonIcon = styled(Icon)`
  font-size: 40px;
  color: ${({ theme }) => theme.COLORS.ICON};
`;
