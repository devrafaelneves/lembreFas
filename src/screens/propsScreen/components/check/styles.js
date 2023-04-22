import styled from "styled-components/native";
import Checkbox from "expo-checkbox";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  height: 25px;
`;

export const CheckItem = styled(Checkbox)`
  margin-right: 10px;
  background-color: ${({ theme }) => theme.COLORS.INPUT};
  height: 25px;
  width: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const CheckText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 18px;
`;
