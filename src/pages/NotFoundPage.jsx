import { Button, Container, Flex, Heading, VStack } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Container as="main" minW="100%" px={0}>
      <Flex alignItems="center" justifyContent="center" minH="100vh" p={6}>
        <VStack spacing={14}>
          <Heading textAlign="center">Página não encontrada ☹️</Heading>

          <Button
            leftIcon={<FaArrowLeft className="icon" />}
            _hover={{
              '.icon': {
                transform: 'translateX(-30%)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            <Link to="/">Voltar para Home</Link>
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
}

export default NotFoundPage;
