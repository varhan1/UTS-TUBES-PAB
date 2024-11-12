import { Box, Text, Image, View, Heading, ScrollView } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Mendapatkan parameter
  const { image, date, title, content } = route.params.item;

  return (
    <>
      <Header title={"Berita"} withBack="true" />
      <ScrollView>
        <Image w='100%' h={200} source={{ uri: image }} alt={title} />
        <View flex={1} p={"4"}>
          <Text fontSize={'md'}>{date}</Text>
          <Box
            py={"4"}
            borderBottomColor={"coolGray.300"}
            borderBottomWidth={1}
            flexDirection="row"
            flex={1}
          >
            <Heading>{title}</Heading>
          </Box>
          <Text paddingTop={'4'} fontSize={'lg'} fontWeight={'600'}>
            {content}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
