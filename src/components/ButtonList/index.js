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

const ButtonList = ({ list }) => {
  if (!list || list.length === 0) {
    return <Empty />;
  }

  return (
    <Scroll showsVerticalScrollIndicator={false}>
      {list.map(({ id, description, action }, index) => (
        <Button key={String(id)} onPress={action}>
          <ButtonText>{description}</ButtonText>
        </Button>
      ))}
    </Scroll>
  );
};

export default ButtonList;
