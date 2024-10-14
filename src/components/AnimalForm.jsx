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
  { value: 'domesticos', label: '=== Domésticos ===', disabled: true },
  { value: 'caninos', label: 'Canídeos (cães)', disabled: false },
  { value: 'felinos', label: 'Felídeos (gatos)', disabled: false },
  { value: 'lagomorfos', label: 'Lagomorfos (coelhos)', disabled: false },
  {
    value: 'roedores',
    label: 'Roedores (hamsters, porquinhos-da-índia, chinchilas)',
    disabled: false,
  },
  {
    value: 'psitacideos',
    label: 'Psitacídeos (periquitos, papagaios, calopsitas)',
    disabled: false,
  },
  {
    value: 'producao',
    label: '=== Animais de Produção ===',
    disabled: true,
  },
  {
    value: 'bovinos',
    label: 'Bovinos (gado de corte e leite)',
    disabled: false,
  },
  { value: 'equinos', label: 'Equinos (cavalos)', disabled: false },
  { value: 'suinos', label: 'Suínos (porcos)', disabled: false },
  {
    value: 'caprinos-e-ovinos',
    label: 'Caprinos e Ovinos (cabras, ovelhas)',
    disabled: false,
  },
  { value: 'bubalinos', label: 'Bubalinos', disabled: false },
  {
    value: 'galiformes',
    label: 'Aves de produção (galinhas, perus, etc.)',
    disabled: false,
  },
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
            color="#1a202c"
            defaultValue=""
            onChange={(e) => setAnimalFamily(e.target.value)}
          >
            <option value="" disabled>
              Escolha uma opção
            </option>

            {animals.map(({ value, label, disabled }, index) => (
              <option key={index} value={value} disabled={disabled}>
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
            color="#1a202c"
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
              defaultValue="f"
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
              color="#1a202c"
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
                color="#1a202c"
                onClick={() => setAge(age >= 99 ? 100 : Number(age) + 1)}
              />

              <NumberDecrementStepper
                color="#1a202c"
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
                    color="#1a202c"
                    onClick={() =>
                      setWeight(weight >= 79 ? 80 : Number(weight) + 1)
                    }
                  />

                  <NumberDecrementStepper
                    color="#1a202c"
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
