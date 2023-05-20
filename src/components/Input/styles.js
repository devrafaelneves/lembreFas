import styled from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";

export const TheInput = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.INPUT};
  height: 60px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  padding: 0px 10px 0px 10px;
  font-size: ${({ theme }) => theme.SIZE.INPUT}px;
`;

export const TheInputMasked = styled(MaskedTextInput)`
  background-color: ${({ theme }) => theme.COLORS.INPUT};
  height: 60px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  padding: 0px 10px 0px 10px;
  font-size: ${({ theme }) => theme.SIZE.INPUT}px;
`;
