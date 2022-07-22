import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      backgroundColor='white'
      borderBottomRadius={8}
      p='1.3rem'
      pt={1}
      justifyContent='space-between'
    >
      <Box>
        <Text color='gray' fontSize='1.02rem'>
          Total this month
        </Text>
        <Text fontSize='3xl' fontWeight='700'>
          $478.33
        </Text>
      </Box>
      <Box alignSelf='flex-end'>
        <Text textAlign='right' fontWeight='700' fontSize='1rem'>
          +2.4%
        </Text>
        <Text color='gray' fontSize='1rem'>
          from last month
        </Text>
      </Box>
    </Flex>
  );
}

export default Footer;
