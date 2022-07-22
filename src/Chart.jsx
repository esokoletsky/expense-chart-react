import React from "react";
import { Box, Text, Flex, Tooltip } from "@chakra-ui/react";
import data from "./data.json";

function Chart() {
  return (
    <Box backgroundColor='white' borderTopRadius={8} mt={4} p='1.3rem'>
      <Text fontWeight='700' fontSize='2xl' mb='3.75rem'>
        Spending - Last 7 Days
      </Text>

      <Flex justifyContent='space-around' mb='1.5rem'>
        {data.map((chart) => (
          <Flex
            flexDirection='column'
            justifyContent='flex-end'
            alignItems='center'
          >
            <Tooltip
              label={`$${chart.amount}`}
              placement='top'
              borderRadius={4}
              fontWeight='700'
              backgroundColor='black'
            >
              <Box
                width='2.25rem'
                mx='.2rem'
                backgroundColor={chart.color}
                height={`calc(${chart.amount} * 3.2px)`}
                borderRadius={3}
                cursor='pointer'
                _hover={{ opacity: 0.7 }}
              />
            </Tooltip>

            <Text color='grey' fontSize='xs' mt={2}>
              {chart.day}
            </Text>
          </Flex>
        ))}
      </Flex>
      <hr style={{ borderTopWidth: "2px", borderColor: "hsl(27, 66%, 92%)" }} />
    </Box>
  );
}

export default Chart;
