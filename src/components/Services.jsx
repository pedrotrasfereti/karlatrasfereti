import {
  Container,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import ServiceCard from './ServiceCard';

const serviceItems = [
  { index: 1, name: 'Consultorias em fazendas', price: '500' },
  { index: 2, name: 'Consultas a domicílio', price: '100' },
  { index: 3, name: 'Formulação nutricional animal', price: '300' },
];

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
          {serviceItems.map(({ index, name, price }) => (
            <ServiceCard
              key={`service-${index}`}
              index={index}
              title={name}
              price={price}
            />
          ))}
        </Flex>
      </VStack>
    </Container>
  );
}

export default Services;
