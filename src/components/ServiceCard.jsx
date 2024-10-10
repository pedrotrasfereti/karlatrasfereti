import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ServiceCard({ index, title, price = undefined }) {
  return (
    <Box
      as="article"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minH="17rem"
      maxW={{ base: '17rem', md: 'full' }}
      w={{ base: 'full', sm: 'xs' }}
      border="1px"
      borderColor="brand.500"
      p={7}
      transition="all 0.3s ease"
      _hover={{
        boxShadow: 'lg',
        '.divider': { width: '100%' },
      }}
    >
      <Heading fontSize="xl" fontWeight="light" maxW="75%">
        {title}
      </Heading>

      <Divider
        className="divider"
        width="0%"
        transition="width 0.5s ease"
        orientation="horizontal"
        mx="auto"
      />

      {price && <Text>A partir de R${price}</Text>}

      <Button variant="cta">
        <Link to={`/servicos/${index}`} state={{ title }}>
          Reserve Agora
        </Link>
      </Button>
    </Box>
  );
}

export default ServiceCard;
