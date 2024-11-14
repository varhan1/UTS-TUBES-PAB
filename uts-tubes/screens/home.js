import { Heading, Image, Text } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
    <Header title={"News"} />
    <ScrollView>
    <Box py={"4"} px={"4"} bg="white">
      <Heading mb="2">Breaking News</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {datas.slice(0, 3).map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("News Detail", { item: item })}
          >
            <Box w={"72"} h={"40"} mr={"4"} borderRadius="md" overflow="hidden">
              <Image source={{ uri: item.image }} alt="Breaking News Image" w="full" h="full" />
              <Box position="absolute" bottom="0" left="0" p="2" bg="rgba(0,0,0,0.5)" w="full">
                <Heading color="white" fontSize="sm" numberOfLines={2}>{item.title}</Heading>
                <Text color="gray.300" fontSize="xs">{item.date}</Text>
              </Box>
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Box>

    <Box py={"4"} px={"4"} bg="white">
    <Box flexDirection="row" justifyContent="space-between" alignItems="center" mb="2">
            <Heading>Recommended</Heading>
            <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
              <Text color="gray.700">View All</Text>
            </TouchableOpacity>
          </Box>
      {datas.slice(4, 8).map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate("News Detail", { item: item })}
        >
          <Box flexDirection="row" alignItems="center" mb="4" p="2" borderRadius="md" borderColor="coolGray.200" borderWidth={1}>
            <Image
              source={{ uri: item.image }}
              alt="Recommended Image"
              size="lg"
              borderRadius="md"
              mr="4"
            />
            <Box flex={1}>
              <Heading fontSize="sm"  mb="1" numberOfLines={2}>
                {item.title}
              </Heading>
              <Text fontSize="xs" color="gray.500">{item.date}</Text>
            </Box>
          </Box>
        </TouchableOpacity>
      ))}
    </Box>
    </ScrollView>
    </>
  );
};

export default Home;