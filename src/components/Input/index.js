import { TheInput, TheInputMasked } from "./styles";

const Input = ({
  value,
  setValue,
  type = "none",
  label = "Input Exemplo",
  masked = false,
}) => {
  if (masked) {
    return (
      <TheInputMasked
        mask="99:99"
        value={value}
        keyboardType={type}
        placeholder={label}
        onChangeText={(text, rawText) => setValue(text)}
      />
    );
  } else {
    return (
      <TheInput
        value={value}
        onChangeText={setValue}
        keyboardType={type}
        placeholder={label}
      />
    );
  }
};

export default Input;
