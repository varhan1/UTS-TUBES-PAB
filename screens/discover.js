import React, { useEffect, useState } from "react";
import { Heading, Image, Text, Input, Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import { fetchNews } from "../services/api";

const Discover = () => {
  const navigation = useNavigation();
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //uE
  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        console.log("Fetched News Data:", data);
        const validData = data.filter((item) => item && item.title);
        setNewsData(validData);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      }
    };
    getNews();
  }, []);

  const filteredData = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header title={"Discover"} />
      <ScrollView>
        <Box py="4" px="4" bg="white">
          <Input
            placeholder="Search for news"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            height={50}
            mb={5}
            bg="gray.100"
            borderRadius={40}
            px={4}
          />
          <Heading mb="5">News For You</Heading>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              const imageUrl = item.urlToImage || item.image || "https://via.placeholder.com/150";
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("News Detail", { item })}
                >
                  <Box alignItems="center" mb="7">
                    <Image
                      w="100%"
                      h={200}
                      source={{ uri: imageUrl }}
                      alt="Discover Image"
                      borderRadius="md"
                    />
                    <Box flex={1}>
                      <Text fontSize="xs" mt="3" mb="2" color="gray.500">
                        {item.published || "No Date "}
                      </Text>
                      <Heading fontSize="md" numberOfLines={2}>
                        {item.title || "No Title"}
                      </Heading>
                    </Box>
                  </Box>
                </TouchableOpacity>
              );
            })
          ) : (
            <Box alignItems="center" mt="5">
              <Text fontSize="md" color="gray.500">
                No news available, please try another keyword.
              </Text>
            </Box>
          )}
        </Box>
      </ScrollView>
    </>
  );
};

export default Discover;
