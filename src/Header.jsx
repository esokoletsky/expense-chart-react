import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import logo from "./img/logo.svg";

function Header() {
  return (
    <Flex
      p='1.3rem'
      backgroundColor='softRed'
      borderRadius={8}
      justifyContent='space-between'
    >
      <Box color='white'>
        <Text fontSize='m' opacity='.9'>
          My Balance
        </Text>
        <Text fontWeight='700' fontSize='2xl'>
          $921.48
        </Text>
      </Box>
      <Image src={logo} />
    </Flex>
  );
}

export default Header;
