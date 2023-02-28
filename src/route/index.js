import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { homeScreen, classroomScreen, dateScreen, propsScreen } from '../screens';

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={homeScreen} />
                <Stack.Screen name="SelectDate" component={dateScreen} />
                <Stack.Screen name="SelectClassroom" component={classroomScreen} />
                <Stack.Screen name="InsertProps" component={propsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;