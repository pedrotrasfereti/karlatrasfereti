import {
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import {
  ChevronDownIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from '@chakra-ui/icons';

import { FaPaw, FaInfo, FaPhoneAlt } from 'react-icons/fa';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      bg="transparent"
      maxH="1140px"
      maxW="100%"
      position="absolute"
      px={0}
      zIndex={10}
    >
      <Flex h={16}>
        <Flex alignItems="center" justifyContent="center" flex="1">
          <Text as="h1" textAlign="center">
            <Link to="/">Karla Trasfereti</Link>
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-end' }}
          flex="1"
        >
          <HStack spacing={{ base: 3, sm: 4 }} alignItems="center" px={4}>
            <InputGroup display={{ base: 'none', md: 'block' }} maxW="13rem">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>

              <Input
                bg="white"
                placeholder="Pesquisar"
                rounded="full"
                maxW="13rem"
                focusBorderColor="brand.700"
              />
            </InputGroup>

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                icon={<ChevronDownIcon />}
                pl={6}
                pr={6}
                gap={10}
                maxW="7rem"
              >
                Menu
              </MenuButton>

              <MenuList as="nav">
                <MenuItem as="a" href="#sobre" icon={<FaInfo />}>
                  Sobre Mim
                </MenuItem>

                <MenuItem as="a" href="#servicos" icon={<FaPaw />}>
                  Serviços
                </MenuItem>

                <MenuItem as="a" href="#contato" icon={<FaPhoneAlt />}>
                  Contato
                </MenuItem>
              </MenuList>
            </Menu>

            <IconButton
              onClick={toggleColorMode}
              aria-label="Toggle theme"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              rounded="full"
            />
          </HStack>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
