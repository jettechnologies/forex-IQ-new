// import { useState } from 'react';
import { Box, Flex, Link, Button, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="gray.900" color="white" py={4} w="100%">
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Box>Logo</Box>
        <Flex align="center" display={{ base: 'none', md: 'flex' }}>
          <Link mx={2}>Account</Link>
          <Link mx={2}>Platform</Link>
          <Link mx={2}>Trade</Link>
          <Link mx={2}>About Company</Link>
          <Button colorScheme="red" ml={4}>Login</Button>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Link display="block" mb={2} onClick={onClose}>Account</Link>
            <Link display="block" mb={2} onClick={onClose}>Platform</Link>
            <Link display="block" mb={2} onClick={onClose}>Trade</Link>
            <Link display="block" mb={2} onClick={onClose}>About Company</Link>
            <Button colorScheme="red" w="100%" mt={4} onClick={onClose}>Login</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
