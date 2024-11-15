import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Discover from "./screens/discover";
import NewsDetail from "./screens/news-detail";
import Tips from "./screens/tips";
import BMICalculator from "./screens/BMICalculator";
import HealthScreen from "./screens/HealthScreen"; // Import HealthScreen
import AnotherScreen from "./screens/AnotherScreen"; // Import AnotherScreen
import MedicationReminder from "./screens/MedicationReminder"; // Import AnotherScreen
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Discover":
              iconName = "compass-outline";
              break;
            case "Profile":
              iconName = "time-outline";
              break;
            case "Tips":
              iconName = "bulb-outline";
              break;
            case "BMI":
              iconName = "fitness-outline";
              break;
          }
          return <Ionicons name={iconName} size={28} color={focused ? "black" : color} />;
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: { height: 100, borderTopWidth: 0 },
        tabBarLabel: ({ children, color, focused }) => (
          <Text color={focused ? "black" : color} textAlign="center">
            {children}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Discover" component={Discover} options={noHead} />
      <Tab.Screen name="Tips" component={Tips} options={noHead} />
      <Tab.Screen name="BMI" component={BMICalculator} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="HealthScreen" component={HealthScreen} options={noHead} />
          <Stack.Screen name="AnotherScreen" component={AnotherScreen} options={noHead} />
          <Stack.Screen name="MedicationReminder" component={MedicationReminder} options={noHead} />
          <Stack.Screen name="News Detail" component={NewsDetail} options={noHead} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: "Chat" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
