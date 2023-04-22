import { TheInput } from "./styles";

const Input = ({ value, setValue, type = "none", label = "Input Exemplo" }) => {
  return (
    <TheInput
      value={value}
      onChangeText={setValue}
      keyboardType={type}
      placeholder={label}
    />
  );
};

export default Input;
