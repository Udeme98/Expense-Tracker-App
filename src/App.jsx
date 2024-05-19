import { Box, Container, Flex } from "@chakra-ui/react";
import Home from "./components/Home";

const App = () => {
  return (
    <Container bg={"#f8fafd"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
      <Flex height={"full"}>
        <Box height={"full"} flex={5} w={"100vw"}>
          <Home />
        </Box>
      </Flex>
    </Container>
  );
};
export default App;
