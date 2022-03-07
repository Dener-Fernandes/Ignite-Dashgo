import { Box, Stack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

export function NavSection() {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
      <Stack spacing="4" mt="8" align="stretch">
        <Link display="flex" align="center">
          <Icon as={RiDashboardLine} fontSize="20" />
          <Text ml="4" fontWeight="medium">Dashboard</Text>
        </Link>
        <Link display="flex" align="center">
          <Icon as={RiContactsLine} fontSize="20" />
          <Text ml="4" fontWeight="medium">Usuários</Text>
        </Link>
      </Stack>
    </Box>
  );
}