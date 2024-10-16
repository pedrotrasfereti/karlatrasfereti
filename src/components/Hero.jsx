import { useEffect } from 'react';

import {
  Box,
  Button,
  Container,
  Fade,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import HeroImage from '../assets/hero.jpeg';

function Hero() {
  // Fade in element on mounted
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    onToggle();
  }, []);

  return (
    <Container as="section" minW="100%" px={0} zIndex={2}>
      <HStack h="100vh">
        <Flex flex="1" alignItems="center" justifyContent="center">
          <Flex
            as="article"
            direction="column"
            textAlign="center"
            alignItems="center"
            justifyContent="space-around"
            h="md"
          >
            <Text as="h2">Veterinária Integrativa</Text>

            <Heading
              as="h3"
              fontWeight="extrabold"
              lineHeight="70px"
              size="3xl"
              w={{ base: '100%', sm: 'md' }}
            >
              Sua médica veterinária de confiança
            </Heading>

            <HStack spacing={2}>
              <Button as="a" href="#sobre" variant="special">
                Explorar
              </Button>
            </HStack>
          </Flex>
        </Flex>

        <Box flex="1" display={{ base: 'none', md: 'block' }}>
          <Fade
            in={isOpen}
            transition={{ enter: { duration: 0.5 }, exit: { duration: 0 } }}
          >
            <Image
              src={HeroImage}
              alt="Cachorro deitado na grama feliz e sorridente"
              h="100vh"
              w="full"
              objectFit="cover"
              userSelect="none"
            />
          </Fade>
        </Box>
      </HStack>
    </Container>
  );
}

export default Hero;
