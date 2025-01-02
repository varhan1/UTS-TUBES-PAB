import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, withBack = false }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />
      <Box bg={"#171717"} p={"4"}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Image
                  source={require("../assets/info-sehat.jpg")}
                  w="12"
                  h="12"
                  alt="Logo"
                  mr={"3"}
                  rounded={"full"}
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"white"}>{title}</Heading>
          </HStack>

          <HStack>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserProfile")}
            >
              <Image
                source={require("../assets/profile.png")}
                w="6"
                h="6"
                alt="Profile Icon"
              />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
