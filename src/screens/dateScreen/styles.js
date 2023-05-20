import styled from "styled-components/native";

export const Body = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.SIZE.TITLE_SUB}px;
  text-align: center;
  margin-bottom: 40px;
`;
