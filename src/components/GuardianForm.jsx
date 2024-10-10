import { useState } from 'react';

import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

import InputMask from 'react-input-mask';

function GuardianForm({ handleSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const validatePhoneNumber = (phone) => {
    const validRegex =
      /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;
    const sanitizedPhone = phone.replace(/[\s\-()]/g, '');

    return validRegex.test(sanitizedPhone);
  };

  const validForm = () => {
    return name.length > 0 && email.length > 0 && validatePhoneNumber(phone);
  };

  return (
    <Flex
      as="form"
      direction="column"
      justifyContent="space-between"
      gap={8}
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
            placeholder="Escreva o seu nome"
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
            placeholder="E-mail para contato"
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
              type="tel"
              bg="white"
              mode="dark"
              focusBorderColor="brand.700"
              maxW="16.25rem"
              placeholder="Telefone para contato"
            />
          )}
        </InputMask>
      </FormControl>

      <Button type="submit" isDisabled={!validForm()} mt={3}>
        Confirmar
      </Button>
    </Flex>
  );
}

export default GuardianForm;
