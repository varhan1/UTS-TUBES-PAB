import { Heading, Image, Text } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";

const Discover = () => {
  const navigation = useNavigation();

  return (
    <>
    <Header title={"Discover"} />
    <ScrollView>
    <Box py={"4"} px={"4"} bg="white">
      <Heading mb="5" color="green.800">News For You</Heading>
      {datas.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate("News Detail", { item: item })}
        >
          <Box alignItems="center" mb="7" >
            <Image
            w="100%" h={200}
              source={{ uri: item.image }}
              alt="Discover Image"
              borderRadius="md"
            />
            <Box flex={1}>
            <Text fontSize="xs" mt="3" color="gray.500">{item.date}</Text>
              <Heading fontSize="md" numberOfLines={2}>
                {item.title}
              </Heading>
              
            </Box>
          </Box>
        </TouchableOpacity>
      ))}
    </Box>
    </ScrollView>
    </>
  );
};

export default Discover;