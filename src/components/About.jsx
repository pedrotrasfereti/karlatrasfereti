import { useEffect, useRef } from 'react';

import {
  Box,
  Container,
  Fade,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import AboutImage from '../assets/about.jpeg';

function About() {
  const bgColor = useColorModeValue(
    'background.lightSecondary',
    'background.darkSecondary',
  );

  // Fade in element when it scrolls into view
  const { isOpen, onOpen } = useDisclosure();
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onOpen();
        }
      });
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  });

  return (
    <Container as="section" id="sobre" minW="100%" px={0}>
      <Fade
        in={isOpen}
        transition={{ enter: { duration: 1 }, exit: { duration: 0 } }}
      >
        <Flex direction={{ base: 'column', md: 'row' }} h="100%">
          <Box h={{ base: '20rem', sm: 'sm' }} w={{ base: 'full', md: 'xs' }}>
            <Image
              ref={domRef}
              src={AboutImage}
              alt="Karla beija testa de um boi"
              w="full"
              h="full"
              objectFit="cover"
              userSelect="none"
            />
          </Box>

          <Box
            as="article"
            bg={bgColor}
            flex="1"
            h={{ base: 'full', md: 'sm' }}
            p={{ base: 7, md: 12 }}
          >
            <VStack alignItems="flex-start" spacing={5}>
              <Heading fontSize={{ base: 28, md: 30 }}>Sobre Mim</Heading>

              <Text
                as="em"
                fontSize={{ base: 16, lg: 18 }}
                fontWeight="normal"
                w={{ base: 'full', md: 'lg', xl: 'xl' }}
              >
                <q>
                  Desde pequena, sempre tive uma profunda conexão com os animais
                  e a natureza, algo que herdei de minha família, que vivia e
                  trabalhava no campo. Cresci cercada pelos animais da fazenda e
                  pelos meus avós, que cuidavam deles em um ambiente onde
                  diversas espécies conviviam harmoniosamente. Essa vivência
                  despertou meu interesse em entender mais sobre o meio ambiente
                  e os animais, o que me levou a buscar conhecimento formal
                  nessa área. Hoje, sei que cuidar é minha verdadeira paixão,
                  algo que sempre foi e sempre será o que amo fazer.
                </q>
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Fade>
    </Container>
  );
}

export default About;
