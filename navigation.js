import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import SignupScreen from "./screens/login/SignupScreen";

const RootStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Signup" component={SignupScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
