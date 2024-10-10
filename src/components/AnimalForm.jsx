import { useState } from 'react';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from '@chakra-ui/react';

import HelpModal from './HelpModal';

const animals = [
  { value: 'caninos', label: 'Canídeos (cães)' },
  { value: 'felinos', label: 'Felídeos (gatos)' },
  { value: 'lagomorfos', label: 'Lagomorfos (coelhos)' },
  {
    value: 'roedores',
    label: 'Roedores (hamsters, porquinhos-da-índia, chinchilas)',
  },
  {
    value: 'psitacideos',
    label: 'Psitacídeos (periquitos, papagaios, calopsitas)',
  },
  { value: 'bovinos', label: 'Bovinos (gado de corte e leite)' },
  { value: 'equinos', label: 'Equinos (cavalos)' },
  { value: 'suinos', label: 'Suínos (porcos)' },
  { value: 'caprinos-e-ovinos', label: 'Caprinos e Ovinos (cabras, ovelhas)' },
  { value: 'bubalinos', label: 'Bubalinos' },
  { value: 'galiformes', label: 'Aves de produção (galinhas, perus, etc.)' },
];

function AnimalForm({ handleSubmit, hideFields = [] }) {
  // Form
  const [animalFamily, setAnimalFamily] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [sex, setSex] = useState('f');
  const [age, setAge] = useState(1);
  const [weight, setWeight] = useState(1);

  const validForm = () => {
    return animalFamily.length > 0 && age;
  };

  const hideWeightField = () => {
    return (
      hideFields.includes('weight') || ['psitacideos'].includes(animalFamily)
    );
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
          <FormLabel fontWeight="light">Categoria</FormLabel>

          <Select
            value={animalFamily}
            name="family"
            bg="white"
            onChange={(e) => setAnimalFamily(e.target.value)}
          >
            <option value="" disabled selected>
              Escolha uma opção
            </option>

            {animals.map(({ value, label }, index) => (
              <option key={index} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="light">Nome do Animal (se houver)</FormLabel>

          <Input
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
            name="name"
            bg="white"
            mode="dark"
            focusBorderColor="brand.700"
          />
        </FormControl>
      </Flex>

      <Flex direction={{ base: 'column', md: 'row' }} gap={14}>
        {!hideFields.includes('sex') && (
          <FormControl isRequired>
            <FormLabel fontWeight="light">Sexo</FormLabel>

            <RadioGroup
              value={sex}
              name="sex"
              onChange={(value) => setSex(value)}
            >
              <Stack spacing={5} direction="row">
                <Radio bg="white" colorScheme="green" value="m">
                  M
                </Radio>

                <Radio bg="white" colorScheme="green" value="f">
                  F
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        )}

        <FormControl isRequired>
          <FormLabel fontWeight="light">Idade do Animal</FormLabel>

          <NumberInput
            name="age"
            focusBorderColor="brand.700"
            defaultValue={1}
            min={0}
            max={100}
            maxW={24}
          >
            <NumberInputField
              bg="white"
              color="black"
              onChange={(e) =>
                setAge(
                  e.target.value > 100
                    ? 100
                    : e.target.value < 0
                      ? 0
                      : e.target.value,
                )
              }
            />

            <NumberInputStepper>
              <NumberIncrementStepper
                color="black"
                onClick={() => setAge(age >= 99 ? 100 : Number(age) + 1)}
              />

              <NumberDecrementStepper
                color="black"
                onClick={() => setAge(age <= 1 ? 0 : Number(age) - 1)}
              />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        {!hideWeightField() && (
          <FormControl>
            <FormLabel fontWeight="light">Peso (kg)</FormLabel>

            <Flex align="center" gap="2">
              <NumberInput
                name="weight"
                focusBorderColor="brand.700"
                defaultValue={1}
                min={0}
                max={80}
                maxW={24}
              >
                <NumberInputField
                  bg="white"
                  color="black"
                  onChange={(e) =>
                    setWeight(
                      e.target.value > 80
                        ? 80
                        : e.target.value < 0
                          ? 0
                          : e.target.value,
                    )
                  }
                />

                <NumberInputStepper>
                  <NumberIncrementStepper
                    color="black"
                    onClick={() =>
                      setWeight(weight >= 79 ? 80 : Number(weight) + 1)
                    }
                  />

                  <NumberDecrementStepper
                    color="black"
                    onClick={() =>
                      setWeight(weight <= 0 ? 0 : Number(weight) - 1)
                    }
                  />
                </NumberInputStepper>
              </NumberInput>

              <HelpModal />
            </Flex>
          </FormControl>
        )}
      </Flex>

      <Button type="submit" isDisabled={!validForm()} mt={3}>
        Confirmar
      </Button>
    </Flex>
  );
}

export default AnimalForm;
