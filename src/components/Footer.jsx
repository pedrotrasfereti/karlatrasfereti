import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

function Footer() {
  const bgColor = useColorModeValue(
    'background.lightSecondary',
    'background.darkPrimary',
  );

  return (
    <Container as="footer" bg={bgColor} minW="100%" p={0}>
      <Flex>
        <Box flex="2" p={12}>
          <Heading fontSize={{ base: 20, md: 24 }}>Karla Trasfereti</Heading>
        </Box>

        <Box flex="4" display={{ base: 'none', lg: 'flex' }} />
      </Flex>

      <Flex borderBottom="1px" borderColor="brand.500">
        <Box
          flex="1"
          borderLeft="1px"
          borderRight="1px"
          borderColor="brand.500"
        >
          <VStack px={6} py={12}>
            <Text fontSize={{ base: 15, md: 16 }}>(19) 995267429</Text>

            <Text fontSize={{ base: 15, md: 16 }}>katrasfer@hotmail.com</Text>
          </VStack>
        </Box>

        <Box flex="1" borderRight="1px" borderColor="brand.500">
          <VStack px={6} py={12}>
            <Text fontSize={{ base: 15, md: 16 }}>Monte Mor/SP</Text>
          </VStack>
        </Box>

        <Box flex="2" display={{ base: 'none', lg: 'flex' }} />
      </Flex>
    </Container>
  );
}

export default Footer;
