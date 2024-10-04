import { useState } from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';

import ContactImage from '../assets/contact.jpeg';

import { sendEmail } from '../services/emailService.js';

function Contact() {
  const bgColor = useColorModeValue(
    'background.lightSecondary',
    'background.darkPrimary',
  );

  const formBgColor = useColorModeValue(
    'surface.light',
    'background.darkSecondary',
  );

  const toast = useToast();

  // Form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  // API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const message = {
        subject: 'PORTFOLIO: Nova Mensagem',
        html: `
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br>
          <br>
          <p>${text}</p>
        `,
      };

      await sendEmail(message);

      toast({
        title: 'Email enviado!',
        status: 'success',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Um erro ocorreu ao enviar o email!',
        status: 'error',
      });
    }
  };

  return (
    <Container
      as="section"
      id="contato"
      direction="column"
      minW="100%"
      px={0}
      position="relative"
    >
      <Box
        flex="1"
        h={{ base: '0', md: 'sm' }}
        w="full"
        backgroundImage={`url(${ContactImage})`}
        backgroundSize="cover"
        backgroundPosition={{
          base: 'top 100% right 0px',
          lg: 'top 70% right 0px',
          xl: 'top 66% right 0px',
        }}
        backgroundRepeat="no-repeat"
      />

      <Box flex="1" h={{ base: '2xl', md: 'xs' }} w="full" bg={bgColor} />

      <Box
        as="form"
        bg={formBgColor}
        position="absolute"
        top={{ base: '50%', lg: '60%' }}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="10"
        h={{ base: 'xl', md: 'md' }}
        w={{ base: 'full', md: '2xl' }}
        px={{ base: 9, md: 12 }}
        py={9}
        shadow="lg"
        onSubmit={handleSubmit}
      >
        <VStack spacing={10}>
          <Heading fontSize={{ base: 22, md: 24 }} fontWeight="normal">
            Deixe uma mensagem
          </Heading>

          <Flex
            direction="column"
            justifyContent="space-between"
            w="full"
            gap={10}
          >
            <Flex direction={{ base: 'column', md: 'row' }} flex="1" gap={10}>
              <FormControl isRequired>
                <FormLabel fontWeight="light">Nome</FormLabel>

                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="flushed"
                  focusBorderColor="brand.700"
                  rounded="0"
                  w="full"
                  size="sm"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="light">Email</FormLabel>

                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  variant="flushed"
                  mode="dark"
                  focusBorderColor="brand.700"
                  rounded="0"
                  w="full"
                  size="sm"
                />
              </FormControl>
            </Flex>

            <FormControl flex="1" isRequired>
              <FormLabel fontWeight="light">Mensagem</FormLabel>

              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escreva sua mensagem aqui..."
                focusBorderColor="brand.700"
                variant="flushed"
                rounded="0"
                size="sm"
                resize="none"
              />
            </FormControl>

            <Button type="submit" variant="cta">Enviar</Button>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
}

export default Contact;
