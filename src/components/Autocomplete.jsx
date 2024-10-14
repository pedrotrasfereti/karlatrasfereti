import { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Text,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import { CUIAutoComplete } from 'chakra-ui-autocomplete';

function Autocomplete({
  items,
  label = '',
  placeholder = '',
  inputStyleProps = {},
  onSetValue,
}) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      if (selectedItems.length > 1) {
        // Keep array length at 1 value
        const lastSelected = selectedItems[selectedItems.length - 1];
        setSelectedItems([lastSelected]);
      } else {
        setSelectedItems(selectedItems);
      }
    }
  };

  const renderCustomInput = (inputProps) => (
    <HStack gap={2} w="full">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>

        <Input
          autoComplete="off"
          bg="white"
          color="#1a202c"
          focusBorderColor="brand.700"
          {...inputProps}
        />
      </InputGroup>

      <Button
        isDisabled={selectedItems.length === 0}
        onClick={() => onSetValue(selectedItems[0].value)}
      >
        Confirmar
      </Button>
    </HStack>
  );

  const renderCustomItem = (selected) => (
    <Flex flexDir="row" alignItems="center" p={0.5}>
      <Text color="#1a202c" userSelect="none">
        {selected.label}
      </Text>
    </Flex>
  );

  if (items.length === 0) {
    return (
      <HStack gap={2} w="full">
        <Skeleton height="3rem" w="full" />
        <Skeleton height="3rem" w="10rem" rounded="full" />
      </HStack>
    );
  }

  return (
    <Box px={8} py={4} w="full">
      <CUIAutoComplete
        label={label}
        placeholder={placeholder}
        disableCreateItem={true}
        items={items}
        itemRenderer={renderCustomItem}
        highlightItemBg="green.50"
        inputStyleProps={inputStyleProps}
        tagStyleProps={{ display: 'none' }}
        selectedItems={selectedItems}
        renderCustomInput={renderCustomInput}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />
    </Box>
  );
}

export default Autocomplete;
