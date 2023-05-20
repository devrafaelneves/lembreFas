import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styled, { useTheme } from "styled-components/native";

import {
  homeScreen,
  classroomScreen,
  dateScreen,
  propsScreen,
} from "../screens";
import {StatusBar } from "react-native";
import { TabBar, TabBarRenderIcon } from "../components/TabBar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AreaSegura = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

const TabView = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <TabBar>
      {/* <TabBarRenderIcon nameIcon="arrow-left" action={() => goBack()} /> */}
      <TabBarRenderIcon nameIcon="home" action={() => navigate("Home")} />
    </TabBar>
  );
};

const TabSchema = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabView {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="SelectDate" component={dateScreen} />
      <Tab.Screen name="SelectClassroom" component={classroomScreen} />
      <Tab.Screen name="InsertProps" component={propsScreen} />
    </Tab.Navigator>
  );
};

const Route = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.COLORS.BACKGROUND} barStyle={"light-content"} />
      <AreaSegura>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={homeScreen} />
          <Stack.Screen name="SelectDate" component={TabSchema} />
        </Stack.Navigator>
      </AreaSegura>
    </NavigationContainer>
  );
};

export default Route;
