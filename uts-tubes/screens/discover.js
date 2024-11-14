import { Heading, Image, Text, Input } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Header } from "../components";
import datas from "../datas";

const Discover = () => {
  const navigation = useNavigation();
  
  const [searchTerm, setSearchTerm] = useState(""); 
  const filteredData = datas.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header title={"Discover"} />
      <ScrollView>
        <Box py={"4"} px={"4"} bg="white">
        <Input
            placeholder="Search for news"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            height={50}
            mb={5}
            bg="gray.100"
            borderRadius={50}
            px={4}
            py={2}
          />
          <Heading mb="5">News For You</Heading>
          {filteredData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("News Detail", { item: item })}
            >
              <Box alignItems="center" mb="7">
                <Image
                  w="100%" h={200}
                  source={{ uri: item.image }}
                  alt="Discover Image"
                  borderRadius="md"
                />
                <Box flex={1}>
                  <Text fontSize="xs" mt="3" mb="2" color="gray.500">{item.date}</Text>
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