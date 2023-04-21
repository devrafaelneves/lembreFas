import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styled from "styled-components/native";

import {
  homeScreen,
  classroomScreen,
  dateScreen,
  propsScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

export const AreaSegura = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

const Route = () => {
  return (
    <NavigationContainer>
      <AreaSegura>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={homeScreen} />
          <Stack.Screen name="SelectDate" component={dateScreen} />
          <Stack.Screen name="SelectClassroom" component={classroomScreen} />
          <Stack.Screen name="InsertProps" component={propsScreen} />
        </Stack.Navigator>
      </AreaSegura>
    </NavigationContainer>
  );
};

export default Route;
