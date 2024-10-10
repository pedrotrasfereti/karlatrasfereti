import {
  Button,
  Divider,
  IconButton,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Stack,
  Tooltip,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';

import { QuestionIcon } from '@chakra-ui/icons';
import { FaWeightScale } from 'react-icons/fa6';

function HelpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Tooltip hasArrow label="Não sei o peso do meu animal" placement="top">
        <IconButton
          aria-label="Peso - Ajuda"
          icon={<QuestionIcon />}
          size="sm"
          variant="ghost"
          rounded="full"
          onClick={onOpen}
        />
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="lg"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Stack align="center" direction="row" spacing={3}>
              <FaWeightScale fontSize={24} /> <h2>Como pesar seu pet</h2>
            </Stack>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Stack spacing={5} pb={3}>
              <p>
                Se você precisar de ajuda para descobrir o peso do seu pet, siga
                este passo a passo simples:
              </p>

              <strong>
                Opção 1: Usando uma balança de banheiro (para pets pequenos e
                médios)
              </strong>

              <OrderedList spacing={3}>
                <ListItem>
                  <strong>Pegue uma balança de banheiro:</strong> Uma balança
                  comum funciona bem para cães e gatos de tamanho pequeno e
                  médio.
                </ListItem>
                <ListItem>
                  <strong>Pese-se primeiro:</strong> Suba na balança e anote o
                  seu peso. Certifique-se de estar descalço e sem segurar o pet.
                </ListItem>
                <ListItem>
                  <strong>Pese-se com o pet no colo:</strong> Agora, suba
                  novamente na balança, segurando o seu pet com cuidado. Anote o
                  novo peso.
                </ListItem>
                <ListItem>
                  <strong>Calcule o peso do pet:</strong> Subtraia o seu peso do
                  peso total que você anotou com o pet no colo. O resultado será
                  o peso do seu pet.
                </ListItem>
              </OrderedList>

              <Divider />

              <strong>
                Opção 2: Usando uma balança para pets (ou balanças maiores)
              </strong>

              <p>Se o seu pet for grande e difícil de segurar no colo:</p>

              <OrderedList spacing={3}>
                <ListItem>
                  <strong>Coloque o pet diretamente na balança:</strong> Se você
                  tiver acesso a uma balança própria para pets ou uma balança
                  maior, simplesmente coloque o pet em cima da balança e anote o
                  peso exibido.
                </ListItem>
                <ListItem>
                  <strong>Certifique-se de que o pet fique parado:</strong> Para
                  obter uma leitura precisa, mantenha o animal calmo e parado
                  por alguns segundos.
                </ListItem>
              </OrderedList>

              <Divider />

              <strong>Dicas extras:</strong>

              <UnorderedList spacing={3}>
                <ListItem>
                  Para animais inquietos, ofereça um petisco ou carinho para
                  mantê-los calmos durante a pesagem.
                </ListItem>
                <ListItem>
                  Se você não tiver uma balança em casa, muitas clínicas
                  veterinárias e pet shops têm balanças próprias para animais e
                  podem ajudar.
                </ListItem>
              </UnorderedList>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default HelpModal;
