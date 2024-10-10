import { useState } from 'react';

import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

import InputMask from 'react-input-mask';

function GuardianForm({ handleSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const validForm = () => {
    return name.length > 0 && email.length > 0 && phone.length > 0;
  };

  return (
    <Flex
      as="form"
      direction="column"
      justifyContent="space-between"
      gap={10}
      w="full"
      onSubmit={handleSubmit}
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap={14}>
        <FormControl isRequired>
          <FormLabel fontWeight="light">Nome</FormLabel>

          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            bg="white"
            focusBorderColor="brand.700"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight="light">Email</FormLabel>

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            bg="white"
            mode="dark"
            focusBorderColor="brand.700"
          />
        </FormControl>
      </Flex>

      <FormControl isRequired>
        <FormLabel fontWeight="light">Telefone</FormLabel>

        <InputMask
          mask="(99) 99999-9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        >
          {() => (
            <Input
              name="phone"
              bg="white"
              mode="dark"
              focusBorderColor="brand.700"
              w={64}
            />
          )}
        </InputMask>
      </FormControl>

      <Button type="submit" isDisabled={!validForm()}>
        Confirmar
      </Button>
    </Flex>
  );
}

export default GuardianForm;
