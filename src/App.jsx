import { Text } from '@chakra-ui/react';

function App() {
  return (
    <Text
      as="h1"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="4xl"
      fontWeight="bold"
      p={2}
    >
      Hello World!
    </Text>
  );
}

export default App;
