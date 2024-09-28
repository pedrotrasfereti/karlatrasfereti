import { useEffect, useRef } from 'react';

import {
  Box,
  Container,
  Fade,
  Flex,
  Heading,
  Image,
  ListIcon,
  ListItem,
  UnorderedList,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import SkillsImage from '../assets/skills.jpeg';

import { FaPaw } from 'react-icons/fa';

function Skills() {
  const listBulletColor = useColorModeValue(
    'lightListBullet',
    'darkListBullet',
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
    <Container as="section" minW="100%" px={0}>
      <Fade
        in={isOpen}
        transition={{ enter: { duration: 1 }, exit: { duration: 0 } }}
      >
        <Flex
          direction={{ base: 'column-reverse', md: 'row-reverse' }}
          h="100%"
        >
          <Box
            h={{ base: '20rem', md: 'xl', xl: 'sm' }}
            w={{ base: 'full', md: 'xs' }}
          >
            <Image
              ref={domRef}
              alt="Karla faz cirurgia em um pet"
              src={SkillsImage}
              h="full"
              w="full"
              objectFit="cover"
              userSelect="none"
            />
          </Box>

          <Box
            as="article"
            flex="1"
            h={{ base: 'full', md: 'xl', xl: 'sm' }}
            p={{ base: 7, md: 12 }}
          >
            <VStack alignItems="flex-start" spacing={5}>
              <Heading fontSize={{ base: 28, md: 30 }}>Habilidades</Heading>

              <Flex gap={4}>
                <UnorderedList
                  styleType="none"
                  spacing={4}
                  marginInlineStart={0}
                >
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Empatia no trato com animais e tutores
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Capacidade analítica para prover diagnósticos
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Comprometimento com a saúde e o bem-estar animal
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Habilidade com animais de pequeno, médio e grande porte
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Capacidade de lidar com animais de diferentes espécies e
                    temperamento
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Boa comunicação com a equipe e tutores de animais
                  </ListItem>
                </UnorderedList>

                <UnorderedList
                  styleType="none"
                  spacing={3}
                  marginInlineStart={0}
                >
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Proatividade para atender às demandas da clínica
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Conhecimentos em nutrição animal
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Conhecimento sobre o comportamento animal
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Compromisso com a busca constante por novas práticas
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaPaw}
                      fontSize="18px"
                      textColor={listBulletColor}
                    />
                    Disponibilidade para realizar atendimento domiciliar
                  </ListItem>
                </UnorderedList>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Fade>
    </Container>
  );
}

export default Skills;
