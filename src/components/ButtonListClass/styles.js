import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 14px;
  height: 50px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.SIZE.INPUT}px;
`;

export const Scroll = styled.ScrollView``;

export const EmptyContainer = styled.View`
  flex: 1; 
  justify-content: center;
  align-items: center;
`;