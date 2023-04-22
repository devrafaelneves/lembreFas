import { useNavigation } from "@react-navigation/native";
import { Button, ButtonText, EmptyContainer, Scroll } from "./styles";

/**
 *
 * Este componente renderiza uma lista de itens,
 * deve ser passada a proprieade em array
 */

const Empty = () => (
  <EmptyContainer>
    <ButtonText>Não há registros!</ButtonText>
  </EmptyContainer>
);

const ButtonListClass = ({ list, week }) => {
  const { navigate } = useNavigation();
  const goToEdit = (classe) => {
    navigate("InsertProps", {
      data: classe,
      description: week.description,
      id: week.id,
    });
  };

  if (!list || list.length === 0) {
    return <Empty />;
  }

  return (
    <Scroll showsVerticalScrollIndicator={false}>
      {list.map((item, index) => (
        <Button key={String(item.id)} onPress={() => goToEdit(item)}>
          <ButtonText>Aula {index + 1}</ButtonText>
        </Button>
      ))}
    </Scroll>
  );
};

export default ButtonListClass;
