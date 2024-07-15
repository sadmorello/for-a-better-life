// src/components/Sidebar.tsx

import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import NextLink from 'next/link';

interface NavItemProps {
  children: ReactNode;
  href: string;
}

const NavItem = ({ children, href }: NavItemProps) => (
  <Link
    as={NextLink}
    href={href}
    style={{ textDecoration: 'none' }}
    _hover={{ backgroundColor: 'gray.700' }}
  >
    <Box p="4" borderRadius="md" _hover={{ bg: 'gray.600' }}>
      {children}
    </Box>
  </Link>
);

const Sidebar = () => {
  return (
    <Box
      position="relative"
      left="0"
      w="200px"
      h="100vh"
      bg="gray.800" // Primary approach
      backgroundColor="gray.800" // Alternative approach
      color="white"
      p="4"
    >
      <Flex direction="column" align="start">
        <Text fontSize="xl" mb="4">
          For a Better Life
        </Text>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/schedules">Agendamentos</NavItem>
        <NavItem href="/payments">Financeiro</NavItem>        
      </Flex>
    </Box>
  );
};

export default Sidebar;
