import AsyncStorage from "@react-native-async-storage/async-storage";

export const getClasses = async (idweek) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${idweek}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn("Erro ao obter os dados", e);
  }
};

export const createOrEditClass = async ({ idweek, data }) => {
  const currentClasses = await getClasses(idweek);

  if(!currentClasses){
    try {
        const jsonValue = JSON.stringify([data]);
        await AsyncStorage.setItem(`@${idweek}`, jsonValue);
        console.warn("Os dados foram salvos");
        return true;
      } catch (e) {
        // saving error
        console.warn("Erro ao gravar os dados", e);
        return false;
      }
  }else{
    const index = currentClasses.findIndex((i) => i.idclass === data.idclass);

    let manipulate;
  
    if (index === -1) {
      manipulate = [...currentClasses, data];
    } else {
      manipulate = currentClasses;
      manipulate[index] = data;
    }
  
    try {
      const jsonValue = JSON.stringify(manipulate);
      await AsyncStorage.setItem(`@${idweek}`, jsonValue);
      console.warn("Os dados foram salvos");
      return true;
    } catch (e) {
      // saving error
      console.warn("Erro ao gravar os dados", e);
      return false;
    }
  }
};
