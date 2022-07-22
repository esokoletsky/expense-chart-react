import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Chart from "./Chart";
import Footer from "./Footer";

function App() {
  return (
    <Flex backgroundColor='cream' h='100vh' justifyContent='center'>
      <Box py='5rem' px='1rem' width='400px'>
        <Header />
        <Chart />
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
