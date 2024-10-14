import { useCallback, useEffect, useState } from 'react';

import {
  Button,
  Container,
  Flex,
  Heading,
  VStack,
  useSteps,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react';

import AnimalForm from '../components/AnimalForm';
import Autocomplete from '../components/Autocomplete';
import GuardianForm from '../components/GuardianForm';
import Stepper from '../components/Stepper';

import { BsArrowLeft } from 'react-icons/bs';

import { Link, useLocation, useParams } from 'react-router-dom';

import { sendEmail } from '../services/emailService.js';

const cities = [
  { value: 'campinas', label: 'Campinas, SP' },
  { value: 'indaiatuba', label: 'Indaiatuba, SP' },
  { value: 'sumare', label: 'Sumaré, SP' },
  { value: 'montemor', label: 'Monte Mor, SP' },
  { value: 'hortolandia', label: 'Hortolandia, SP' },
];

const serviceItems = [
  { index: 1, name: 'Consultorias em fazendas', price: '500' },
  { index: 2, name: 'Consultas a domicílio', price: '100' },
  { index: 3, name: 'Formulação nutricional animal', price: '300' },
];

function BookingPage() {
  const { id: serviceId } = useParams();
  const location = useLocation();
  const { title } = location.state || {};

  // Form
  const [formCompleted, setFormCompleted] = useState(false);
  const [guardianInfo, setGuardianInfo] = useState({});
  const [animalInfo, setAnimalInfo] = useState({});
  const [loading, setLoading] = useState(false);

  // Stepper
  const getSteps = () => {
    let steps = [{ title: 'Local' }, { title: 'Sobre o Tutor' }];

    if (serviceId !== '1') steps.push({ title: 'Sobre o Animal' });

    return steps;
  };

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: getSteps().length,
  });

  const renderStepContent = () => {
    if (activeStep === 1) {
      return (
        <Autocomplete
          items={cities}
          label="Sua Localidade"
          placeholder="Pesquisar"
          onSetValue={(value) => {
            setGuardianInfo({ locality: value });
            setActiveStep(2);
          }}
        />
      );
    } else if (activeStep === 2) {
      return (
        <GuardianForm
          handleSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            setGuardianInfo({
              ...guardianInfo,
              name: form.elements.name.value,
              email: form.elements.email.value,
              phone: form.elements.phone.value,
            });

            const finalStep = getSteps().length;

            if (activeStep === finalStep) {
              setFormCompleted(true);
            } else {
              setActiveStep(3);
            }
          }}
        />
      );
    } else if (activeStep === 3) {
      const hideFields = ['2'].includes(serviceId) ? true : false;

      return (
        <AnimalForm
          hideFields={hideFields ? ['sex', 'weight'] : []}
          handleSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            setAnimalInfo({
              animalFamily: form.elements.family.value,
              animalName: form.elements.name.value,
              sex: hideFields ? 'N/A' : form.elements.sex.value,
              age: form.elements.age.value,
              weight: hideFields ? 'N/A' : form.elements.weight.value,
            });

            setFormCompleted(true);
          }}
        />
      );
    }
  };

  // Confirmation Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sendBookingEmail = useCallback(async () => {
    const { name: serviceName } = serviceItems.find(
      (item) => item.index == serviceId,
    );
    const { name, email, phone, locality } = guardianInfo;
    const { animalName, animalFamily, sex, age, weight } = animalInfo;

    setLoading(true);

    try {
      const message = {
        subject: 'PORTFOLIO: Novo Pedido',
        html: `
          <h2>Pedido #</h2>
          <br>
          <p><strong>Descrição do serviço:</strong> ${serviceName}</p>
          <br>
          <br>
          <h3>Informações sobre o Tutor</h3>
          <br>
          <p><strong>Localidade:</strong> ${locality}</p>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <br>
          <br>
          <h3>Informações sobre o Animal</h3>
          <p><strong>Nome do animal:</strong> ${animalName}</p>
          <p><strong>Família taxonomica:</strong> ${animalFamily}</p>
          <p><strong>Sexo:</strong> ${sex}</p>
          <p><strong>Idade:</strong> ${age}</p>
          <p><strong>Peso (kg):</strong> ${weight}</p>
        `,
      };

      await sendEmail(message);
      setLoading(false);

      // Show confirmation modal
      onOpen();
    } catch (error) {
      console.error(error);
    }
  }, [animalInfo, guardianInfo, onOpen, serviceId]);

  useEffect(() => {
    if (formCompleted) sendBookingEmail();
  }, [animalInfo, formCompleted, sendBookingEmail]);

  useEffect(() => {
    if (formCompleted) sendBookingEmail();
  }, [guardianInfo, formCompleted, sendBookingEmail]);

  return (
    <Container as="main" minW="100%" px={0}>
      <Flex direction="column" minH="100vh" px={7} gap={14}>
        <Flex
          align="center"
          direction={{ base: 'column', md: 'row' }}
          mt={28}
          gap={{ base: 7, md: 0 }}
        >
          <Button
            variant="ghost"
            color="brand.500"
            fontWeight="400"
            leftIcon={<BsArrowLeft className="icon" />}
            _hover={{
              '.icon': {
                transform: 'translateX(-30%)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            <Link to="/">Voltar para Home</Link>
          </Button>

          <Heading as="h1" textAlign="center" flex="3" size="lg">
            {title}
          </Heading>

          <Spacer />
        </Flex>

        <VStack alignSelf="center" spacing={12} w={{ base: 'full', md: 'xl' }}>
          <Stepper
            activeStep={activeStep}
            steps={getSteps()}
            setActiveStep={(value) => setActiveStep(value)}
          />

          {loading ? (
            <Flex align="center" justifyContent="center">
              <Spinner size="xl" />
            </Flex>
          ) : (
            renderStepContent()
          )}
        </VStack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pedido Recebido!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>
            <p>
              Obrigado pelo seu pedido! Vamos analisar as informações enviadas e
              a Dra. Karla entrará em contato com você em breve por e-mail ou
              WhatsApp. Fique atento às nossas mensagens.
            </p>
          </ModalBody>

          <ModalFooter>
            <Flex align="center" justifyContent="center" w="full">
              <Button colorScheme="green" mr={3} onClick={onClose}>
                <Link to="/">Voltar para Home</Link>
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default BookingPage;
