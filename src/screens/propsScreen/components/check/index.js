import { CheckItem, CheckText, Container } from "./styles";

const Check = ({ label, value, setValue }) => {
  return (
    <Container onPress={setValue}>
      <CheckItem value={value} onValueChange={setValue}/>
      <CheckText>{label}</CheckText>
    </Container>
  );
};

export default Check;
