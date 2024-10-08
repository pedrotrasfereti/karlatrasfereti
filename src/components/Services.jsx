import {
  Container,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import ServiceCard from './ServiceCard';

function Services() {
  const bgColor = useColorModeValue(
    'background.lightSecondary',
    'background.darkSecondary',
  );

  return (
    <Container
      as="section"
      id="servicos"
      bg={bgColor}
      minW="100%"
      h={{ base: 'full', md: 'lg' }}
      p={{ base: 51, md: 53 }}
    >
      <VStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={12}>
        <Heading>Serviços</Heading>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}
          w="full"
          gap={{ base: 12, md: 0, lg: 12 }}
        >
          <ServiceCard title="Consultorias em fazendas" price=" 260" />
          <ServiceCard title="Consultas a domicílio" price=" 100" />
          <ServiceCard title="Formulação nutricional animal" price=" 300" />
        </Flex>
      </VStack>
    </Container>
  );
}

export default Services;
