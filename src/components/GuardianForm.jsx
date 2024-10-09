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
            variant="flushed"
            focusBorderColor="brand.700"
            rounded="0"
            size="sm"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight="light">Email</FormLabel>

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            variant="flushed"
            mode="dark"
            focusBorderColor="brand.700"
            rounded="0"
            size="sm"
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
              variant="flushed"
              mode="dark"
              focusBorderColor="brand.700"
              rounded="0"
              size="sm"
              w={64}
            />
          )}
        </InputMask>
      </FormControl>

      <Button type="submit" variant="cta" isDisabled={!validForm()}>
        Confirmar
      </Button>
    </Flex>
  );
}

export default GuardianForm;
