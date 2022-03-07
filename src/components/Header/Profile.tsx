import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Dener Fernandes</Text>
        <Text color="gray.300" fontSize="small">
          dener@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Dener Fernandes" src="https://github.com/Dener-Fernandes.png"/>
  </Flex>
  );
}